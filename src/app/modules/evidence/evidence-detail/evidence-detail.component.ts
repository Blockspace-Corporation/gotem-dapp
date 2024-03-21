import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EvidenceNftModel } from '../../../models/evidence-nft.model';
import { SmartContractEvidenceService } from '../../../services/smart-contract-evidence/smart-contract-evidence.service';
import { VoteModel } from '../../../models/vote.model';
import { SmartContractVoteService } from '../../../services/smart-contract-vote/smart-contract-vote.service';
import { ExtrinsicService } from '../../../services/extrinsic/extrinsic.service';
import { ExecuteExtrinsicsStatusModel } from '../../../models/execution-extrinsics-status.model';

@Component({
  selector: 'app-evidence-detail',
  templateUrl: './evidence-detail.component.html',
  styleUrl: './evidence-detail.component.scss',
  providers: [ConfirmationService, MessageService]
})
export class EvidenceDetailComponent {
  breadcrumbHome: MenuItem | undefined;
  breadcrumbItems: MenuItem[] | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public decimalPipe: DecimalPipe,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private smartContractEvidenceService: SmartContractEvidenceService,
    private smartContractVoteService: SmartContractVoteService,
    private extrinsicService: ExtrinsicService
  ) { }

  isLoading: boolean = true;
  statuses: string[] = [
    'New',
    'Voted',
    'Close'
  ];
  evidenceDetail: EvidenceNftModel = new EvidenceNftModel();
  caseNumber: string = this.padZeroes(this.evidenceDetail.caseId, 10);
  votes: VoteModel[] = [];

  confirmedBurn: boolean = false;

  showProcessModal: boolean = false;
  isProcessing: boolean = false;

  executionExtrinsicsStatus: ExecuteExtrinsicsStatusModel | undefined;

  public getEvidenceById(evidenceId: number): void {
    this.evidenceDetail = new EvidenceNftModel() || undefined;
    this.smartContractEvidenceService.getEvidenceById(evidenceId).subscribe(
      result => {
        let data: any = result;
        if (data != null || data != undefined) {
          this.evidenceDetail = {
            evidenceId: data.evidenceId,
            description: data.description,
            owner: data.owner,
            file: data.file,
            caseId: data.caseId,
            caseTitle: data.caseTitle,
            status: data.status
          };
          this.caseNumber = this.padZeroes(this.evidenceDetail.caseId, 10);
        }

        this.getAllVoteByEvidenceId();
      },
      error => { }
    )
  }

  public getAllVoteByEvidenceId(): void {
    this.votes = [];
    this.smartContractVoteService.getAllVoteByEvidenceId(this.evidenceDetail.evidenceId).subscribe(
      result => {
        let data: any = result;
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            this.votes.push({
              voteId: data[i].voteId,
              caseId: data[i].caseId,
              evidenceId: data[i].evidenceId,
              voter: data[i].voter,
              yesCredit: data[i].yesCredit,
              noCredit: data[i].noCredit,
              destributionReward: data[i].destributionReward
            });
          }
        }

        this.isLoading = false;
      },
      error => { }
    )
  }

  public updateEvidenceExtrinsic(): void {
    this.confirmedBurn = false;
    this.smartContractEvidenceService.updateEvidenceExtrinsic(this.evidenceDetail.evidenceId, this.evidenceDetail).subscribe(
      result => {
        let data: any = result;
        this.signAndSendExtrinsics(data);
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.error });
      }
    );
  }

  public burnEvidenceExtrinsic(): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to burn this evidence?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: "none",
      acceptButtonStyleClass: "p-button-danger",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      accept: () => {
        this.confirmedBurn = true;
        this.smartContractEvidenceService.burnEvidenceExtrinsic(this.evidenceDetail.evidenceId).subscribe(
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
                this.router.navigate(['/app/evidence']);
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
      { label: 'Evidence', routerLink: '/app/evidence' },
      { label: 'Evidence Detail' },
    ];

    let evidenceId: number = 0;
    this.route.params.subscribe(params => {
      evidenceId = parseInt(params['id']);
    });

    this.getEvidenceById(evidenceId);
  }
}
