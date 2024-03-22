import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { CaseNftModel } from '../../models/case-nft.model';
import { SmartContractCaseService } from '../../services/smart-contract-case/smart-contract-case.service';
import { ExtrinsicService } from '../../services/extrinsic/extrinsic.service';
import { ExecuteExtrinsicsStatusModel } from '../../models/execution-extrinsics-status.model';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrl: './case.component.scss',
  providers: [MessageService]
})
export class CaseComponent {
  breadcrumbHome: MenuItem | undefined;
  breadcrumbItems: MenuItem[] | undefined;

  constructor(
    private router: Router,
    public decimalPipe: DecimalPipe,
    private messageService: MessageService,
    private smartContractCaseService: SmartContractCaseService,
    private extrinsicService: ExtrinsicService,
  ) { }

  isLoading: boolean = true;
  categories: string[] = [
    'Scam',
    'Web',
    'Person',
    'ConspiracyTheory',
    'Others'
  ];
  selectedCategory: string = 'Scam';
  statuses: string[] = [
    'New',
    'Voted',
    'Close'
  ];
  selectedStatus: string = 'New';
  cases: CaseNftModel[] = [];
  showNewCaseModal: boolean = false;
  newCase: CaseNftModel = new CaseNftModel();

  showProcessModal: boolean = false;
  isProcessing: boolean = false;

  executionExtrinsicsStatus: ExecuteExtrinsicsStatusModel | undefined;

  public getAllCase(): void {
    this.cases = [];
    this.smartContractCaseService.getAllCase().subscribe(
      result => {
        let data: any = result;
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            this.cases.push({
              caseId: data[i].caseId,
              title: data[i].title,
              description: data[i].description,
              category: data[i].category,
              owner: data[i].owner,
              bounty: data[i].bounty,
              file: data[i].file,
              status: data[i].status
            });
          }
        }

        this.isLoading = false;
      },
      error => { }
    )
  }

  public openNewCaseModal(): void {
    this.showNewCaseModal = true;
  }

  public setCaseExtrinsic(): void {
    this.smartContractCaseService.setCaseExtrinsic(this.newCase).subscribe(
      result => {
        let data: any = result;
        this.signAndSendExtrinsics(data);
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.error });
      }
    );
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

            this.showNewCaseModal = false;
            this.getAllCase();
          },
          error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.error });
            this.showProcessModal = false;
          }
        );
      }
    );
  }

  public viewCaseDetail(data: CaseNftModel): void {
    this.router.navigate(['/app/case/detail/' + data.caseId]);
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
      { label: 'Case' }
    ];

    this.getAllCase();
  }
}
