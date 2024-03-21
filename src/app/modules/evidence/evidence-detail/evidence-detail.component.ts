import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { EvidenceNftModel } from '../../../models/evidence-nft.model';
import { SmartContractEvidenceService } from '../../../services/smart-contract-evidence/smart-contract-evidence.service';
import { VoterModel } from '../../../models/voter.model';
import { SmartContractVoteService } from '../../../services/smart-contract-vote/smart-contract-vote.service';
import { ExtrinsicService } from '../../../services/extrinsic/extrinsic.service';
import { ExecuteExtrinsicsStatusModel } from '../../../models/execution-extrinsics-status.model';

@Component({
  selector: 'app-evidence-detail',
  templateUrl: './evidence-detail.component.html',
  styleUrl: './evidence-detail.component.scss'
})
export class EvidenceDetailComponent {
  breadcrumbHome: MenuItem | undefined;
  breadcrumbItems: MenuItem[] | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public decimalPipe: DecimalPipe,
    private smartContractEvidenceService: SmartContractEvidenceService,
    private smartContractVoteService: SmartContractVoteService,
    private extrinsicService: ExtrinsicService
  ) { }

  statuses: string[] = [
    'New',
    'Voted',
    'Close'
  ];
  evidenceDetail: EvidenceNftModel = new EvidenceNftModel();
  voters: VoterModel[] = [];

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
            caseId: data.case_id,
            caseTitle: data.caseTitle,
            status: data.status
          };
        }

        // this is supposedly votes
        this.getAllVoter();
      },
      error => { }
    )
  }

  public getAllVoter(): void {
    this.voters = [];
    this.smartContractVoteService.getAllVoter().subscribe(
      result => {
        let data: any = result;
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            this.voters.push({
              voterId: data[i].voterId,
              caseId: data[i].caseId,
              voter: data[i].voter,
              amountHold: data[i].amountHold,
              voteCredit: data[i].voteCredit,
            });
          }
        }
      },
      error => { }
    )
  }

  ngOnInit() {
    this.breadcrumbHome = { icon: 'pi pi-home', routerLink: '/app/dashboard' };
    this.breadcrumbItems = [
      { label: 'Dashboard' },
      { label: 'Evidence' },
      { label: 'Evidence Detail' },
    ];

    let evidenceId: number = 0;
    this.route.params.subscribe(params => {
      evidenceId = parseInt(params['id']);
    });

    this.getEvidenceById(evidenceId);
  }
}
