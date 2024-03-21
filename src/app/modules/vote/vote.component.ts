import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { VoterModel } from '../../models/voter.model';
import { VoteModel } from '../../models/vote.model';
import { SmartContractVoteService } from '../../services/smart-contract-vote/smart-contract-vote.service';
import { ExtrinsicService } from '../../services/extrinsic/extrinsic.service';
import { ExecuteExtrinsicsStatusModel } from '../../models/execution-extrinsics-status.model';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrl: './vote.component.scss',
  providers: [MessageService]
})
export class VoteComponent {
  breadcrumbHome: MenuItem | undefined;
  breadcrumbItems: MenuItem[] | undefined;

  constructor(
    public decimalPipe: DecimalPipe,
    private messageService: MessageService,
    private smartContractVoteService: SmartContractVoteService,
    private extrinsicService: ExtrinsicService
  ) { }

  isLoading: boolean = true;
  voters: VoterModel[] = [];
  showNewVoterModal: boolean = false;
  voter: VoterModel = new VoterModel();

  votes: VoteModel[] = [];
  showNewVoteModal: boolean = false;
  vote: VoteModel = new VoteModel();
  caseNumber: string = this.padZeroes(this.vote.caseId, 10);
  evidenceNumber: string = this.padZeroes(this.vote.evidenceId, 10);

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
              voterId: data[i].voterId,
              caseId: data[i].caseId,
              voter: data[i].voter,
              amountHold: data[i].amountHold,
              voteCredit: data[i].voteCredit,
            });
          }
        }

        this.getAllVote();
      },
      error => { }
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

  public openNewVoterModal(): void {
    this.showNewVoterModal = true;
    this.voter = new VoterModel();
  }

  public openNewVoteModal(): void {
    this.showNewVoteModal = true;
    this.vote = new VoteModel();
  }

  public setVoterExtrinsic(): void {
    this.smartContractVoteService.setVoterExtrinsic(this.voter).subscribe(
      result => {
        let data: any = result;
        this.signAndSendExtrinsics(data);
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.error });
      }
    );
  }

  public setVoteExtrinsic(): void {
    this.smartContractVoteService.setVoteExtrinsic(this.vote).subscribe(
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

            this.showNewVoterModal = false;
            this.showNewVoteModal = false;

            this.getAllVoter();
          },
          error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.error });
            this.showProcessModal = false;
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
    this.caseNumber = this.padZeroes(this.vote.caseId, 10);
    this.evidenceNumber = this.padZeroes(this.vote.evidenceId, 10);
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
      { label: 'Dashboard' },
      { label: 'Vote' }
    ];

    this.getAllVoter();
  }
}
