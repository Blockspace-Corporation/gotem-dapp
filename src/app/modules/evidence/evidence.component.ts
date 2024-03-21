import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { EvidenceNftModel } from '../../models/evidence-nft.model';
import { SmartContractEvidenceService } from '../../services/smart-contract-evidence/smart-contract-evidence.service';
import { ExtrinsicService } from '../../services/extrinsic/extrinsic.service';
import { ExecuteExtrinsicsStatusModel } from '../../models/execution-extrinsics-status.model';

@Component({
  selector: 'app-evidence',
  templateUrl: './evidence.component.html',
  styleUrl: './evidence.component.scss',
  providers: [MessageService]
})
export class EvidenceComponent {
  breadcrumbHome: MenuItem | undefined;
  breadcrumbItems: MenuItem[] | undefined;

  constructor(
    private router: Router,
    public decimalPipe: DecimalPipe,
    private messageService: MessageService,
    private smartContractEvidenceService: SmartContractEvidenceService,
    private extrinsicService: ExtrinsicService
  ) { }

  statuses: string[] = [
    'New',
    'Voted',
    'Close'
  ];
  selectedStatus: string = 'New';
  evidences: EvidenceNftModel[] = [];
  showNewEvidenceModal: boolean = false;
  newEvidence: EvidenceNftModel = new EvidenceNftModel();

  showProcessModal: boolean = false;
  isProcessing: boolean = false;

  executionExtrinsicsStatus: ExecuteExtrinsicsStatusModel | undefined;

  public getAllEvidence(): void {
    this.evidences = [];
    this.smartContractEvidenceService.getAllEvidence().subscribe(
      result => {
        let data: any = result;
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            this.evidences.push({
              evidenceId: data[i].evidenceId,
              description: data[i].description,
              owner: data[i].owner,
              file: data[i].file,
              caseId: data[i].case_id,
              caseTitle: data[i].caseTitle,
              status: data[i].status
            });
          }
        }
      },
      error => { }
    )
  }

  public openNewEvidenceModal(): void {
    this.showNewEvidenceModal = true;
  }

  public setEvidenceExtrinsic(): void {
    this.smartContractEvidenceService.setEvidenceExtrinsic(this.newEvidence).subscribe(
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

            this.showNewEvidenceModal = false;
            this.getAllEvidence();
          },
          error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.error });
            this.showProcessModal = false;
          }
        );
      }
    );
  }

  public viewEvidenceDetail(data: EvidenceNftModel): void {
    this.router.navigate(['/app/evidence/detail/' + 1]);
  }
  
  ngOnInit() {
    this.breadcrumbHome = { icon: 'pi pi-home', routerLink: '/app/dashboard' };
    this.breadcrumbItems = [
      { label: 'Dashboard' },
      { label: 'Evidence' }
    ];

    this.getAllEvidence();
  }
}
