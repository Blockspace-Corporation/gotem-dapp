import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { VoterModel } from '../../models/voter.model';
import { VoteModel } from '../../models/vote.model';
import { SmartContractVoteService } from '../../services/smart-contract-vote/smart-contract-vote.service';
import { ExtrinsicService } from '../../services/extrinsic/extrinsic.service';
import { ExecuteExtrinsicsStatusModel } from '../../models/execution-extrinsics-status.model';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrl: './vote.component.scss'
})
export class VoteComponent {
  breadcrumbHome: MenuItem | undefined;
  breadcrumbItems: MenuItem[] | undefined;

  constructor(
    public decimalPipe: DecimalPipe,
    private smartContractVoteService: SmartContractVoteService,
    private extrinsicService: ExtrinsicService
  ) { }

  voters: VoterModel[] = [];
  showNewVoterModal: boolean = false;
  voter: VoterModel = new VoterModel();

  votes: VoteModel[] = [];
  showNewVoteModal: boolean = false;
  vote: VoteModel = new VoteModel();

  showProcessModal: boolean = false;
  isProcessing: boolean = false;

  executionExtrinsicsStatus: ExecuteExtrinsicsStatusModel | undefined;

  public getAllVoter(): void {
    this.voters = [];
    this.smartContractVoteService.getAllVoter().subscribe(
      result => {
        let data: any = result;
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            this.voters.push({
              caseId: data[i].caseId,
              voter: data[i].voter,
              amountHold: data[i].amountHold,
              voteCredit: data[i].voteCredit,
            });
          }
        }

        this.getAllVote();
      }
    )
  }

  public getAllVote(): void {
    this.votes = [];
    this.smartContractVoteService.getAllVote().subscribe(
      result => {
        let data: any = result;
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            this.votes.push({
              caseId: data[i].caseId,
              evidenceId: data[i].evidenceId,
              voter: data[i].voter,
              yesCredit: data[i].yesCredit,
              noCredit: data[i].noCredit,
              destributionReward: data[i].destributionReward
            });
          }
        }
      }
    )
  }

  public openNewVoterModal(): void {
    this.showNewVoterModal = true;
  }

  public openNewVoteModal(): void {
    this.showNewVoteModal = true;
  }

  public setVoterExtrinsic(): void {
    this.smartContractVoteService.setVoterExtrinsic(this.voter).subscribe(
      result => {
        let data: any = result;
        this.signAndSendExtrinsics(data);
      }
    );
  }

  public setVoteExtrinsic(): void {
    this.smartContractVoteService.setVoteExtrinsic(this.vote).subscribe(
      result => {
        let data: any = result;
        this.signAndSendExtrinsics(data);
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

            this.showNewVoterModal = false;
            this.showNewVoteModal = false;
            
            this.getAllVoter();
          }
        );
      }
    );
  }

  public viewVoterDetail(data: VoterModel): void {
    this.showNewVoterModal = true;
    this.voter = data;
  }

  public viewVoteDetail(data: VoteModel): void {
    this.showNewVoteModal = true;
    this.vote = data;
  }

  ngOnInit() {
    this.breadcrumbHome = { icon: 'pi pi-home', routerLink: '/app/dashboard' };
    this.breadcrumbItems = [
      { label: 'Dashboard' },
      { label: 'Vote' }
    ];

    this.getAllVoter();
  }
}