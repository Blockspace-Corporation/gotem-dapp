import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CaseNftModel } from '../../../models/case-nft.model';
import { SmartContractCaseService } from '../../../services/smart-contract-case/smart-contract-case.service';
import { EvidenceNftModel } from '../../../models/evidence-nft.model';
import { SmartContractEvidenceService } from '../../../services/smart-contract-evidence/smart-contract-evidence.service';
import { ExtrinsicService } from '../../../services/extrinsic/extrinsic.service';
import { ExecuteExtrinsicsStatusModel } from '../../../models/execution-extrinsics-status.model';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.component.html',
  styleUrl: './case-detail.component.scss',
  providers: [ConfirmationService, MessageService]
})
export class CaseDetailComponent {
  breadcrumbHome: MenuItem | undefined;
  breadcrumbItems: MenuItem[] | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public decimalPipe: DecimalPipe,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private smartContractCaseService: SmartContractCaseService,
    private smartContractEvidenceService: SmartContractEvidenceService,
    private extrinsicService: ExtrinsicService
  ) { }

  isLoading: boolean = true;
  categories: string[] = [
    'Scam',
    'Web',
    'Person',
    'Conspiracy/Theory',
    'Others'
  ];
  statuses: string[] = [
    'New',
    'Voted',
    'Close'
  ];
  caseDetail: CaseNftModel = new CaseNftModel();
  evidences: EvidenceNftModel[] = [];

  confirmedBurn: boolean = false;

  showProcessModal: boolean = false;
  isProcessing: boolean = false;

  executionExtrinsicsStatus: ExecuteExtrinsicsStatusModel | undefined;

  public getCaseById(caseId: number): void {
    this.caseDetail = new CaseNftModel() || undefined;
    this.smartContractCaseService.getCaseById(caseId).subscribe(
      result => {
        let data: any = result;
        if (data != null || data != undefined) {
          this.caseDetail = {
            caseId: data.caseId,
            title: data.title,
            description: data.description,
            category: data.category,
            owner: data.owner,
            bounty: data.bounty,
            file: data.file,
            status: data.status
          };
        }

        this.getAllEvidenceByCaseId();
      },
      error => { }
    )
  }

  public getAllEvidenceByCaseId(): void {
    this.evidences = [];
    this.smartContractEvidenceService.getAllEvidenceByCaseId(this.caseDetail.caseId).subscribe(
      result => {
        let data: any = result;
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            this.evidences.push({
              evidenceId: data[i].evidenceId,
              description: data[i].description,
              owner: data[i].owner,
              file: data[i].file,
              caseId: data[i].caseId,
              caseTitle: data[i].caseTitle,
              status: data[i].status
            });
          }
        }

        this.isLoading = false;
      },
      error => { }
    )
  }

  public viewEvidenceDetail(data: EvidenceNftModel): void {
    this.router.navigate(['/app/evidence/detail/' + 1]);
  }

  public updateCaseExtrinsic(): void {
    this.confirmedBurn = false;
    this.smartContractCaseService.updateCaseExtrinsic(this.caseDetail.caseId, this.caseDetail).subscribe(
      result => {
        let data: any = result;
        this.signAndSendExtrinsics(data);
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.error });
      }
    );
  }

  public burnCaseExtrinsic(): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to burn this case?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: "none",
      acceptButtonStyleClass: "p-button-danger",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      accept: () => {
        this.confirmedBurn = true;
        this.smartContractCaseService.burnCaseExtrinsic(this.caseDetail.caseId).subscribe(
          result => {
            let data: any = result;
            this.signAndSendExtrinsics(data);
          },
          error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.error });
          }
        );
      }
    });
  }

  public signAndSendExtrinsics(data: any): void {
    this.extrinsicService.signExtrinsics(data).then(
      (signedExtrinsics: any) => {
        this.showProcessModal = true;

        this.extrinsicService.executeExtrinsics(signedExtrinsics).subscribe(
          results => {
            this.executionExtrinsicsStatus = {
              message: results.message,
              isError: results.isError
            }

            if (this.confirmedBurn == true) {
              setTimeout(() => {
                this.router.navigate(['/app/case']);
              }, 1000);
            }
          },
          error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.error });
            this.showProcessModal = false;
          }
        );
      }
    );
  }

  public padZeroes(number: number, length: number): string {
    let str = number.toString();
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  }

  ngOnInit() {
    this.breadcrumbHome = { icon: 'pi pi-home', routerLink: '/app/dashboard' };
    this.breadcrumbItems = [
      { label: 'Dashboard', routerLink: '/app/dashboard' },
      { label: 'Case', routerLink: '/app/case' },
      { label: 'Case Detail' },
    ];

    let caseId: number = 0;
    this.route.params.subscribe(params => {
      caseId = parseInt(params['id']);
    });

    this.getCaseById(caseId);
  }
}
