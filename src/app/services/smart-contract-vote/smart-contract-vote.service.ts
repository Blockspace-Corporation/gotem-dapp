import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../../app-settings';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Observable, Subject } from 'rxjs';
import { VoterModel } from '../../models/voter.model';
import { VoteModel } from '../../models/vote.model';

@Injectable({
  providedIn: 'root'
})
export class SmartContractVoteService {

  constructor(
    private appSettings: AppSettings,
    private httpClient: HttpClient
  ) { }

  wsProvider = new WsProvider(this.appSettings.wsProviderEndpoint);
  api = ApiPromise.create({ provider: this.wsProvider });
  keypair = this.appSettings.keypair;

  defaultApiEndpoint: string = this.appSettings.apiEndpoint;
  options: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  public getAllVoter(): Observable<VoterModel[] | []> {
    return new Observable<VoterModel[]>((observer) => {
      let voters: VoterModel[] = [];

      this.httpClient.get(this.defaultApiEndpoint + '/api/smart-contract/voter/get/all-voter', this.options).subscribe(
        response => {
          let results: any = response;

          if (results.length > 0) {
            for (let i = 0; i < results.length; i++) {
              voters.push({
                caseId: results[i].caseId,
                voter: results[i].voter,
                amountHold: results[i].amountHold,
                voteCredit: results[i].voteCredit,
              });
            }
          }

          observer.next(voters);
          observer.complete();
        },
        error => {
          observer.next([]);
          observer.complete();
        }
      )
    });
  }

  public getVoterById(id: number): Observable<VoterModel | undefined> {
    return new Observable<VoterModel | undefined>((observer) => {
      let voter: VoterModel = new VoterModel() || undefined;

      this.httpClient.get(this.defaultApiEndpoint + '/api/smart-contract/voter/get/voter/by-id/' + id, this.options).subscribe(
        response => {
          let results: any = response;

          if (results != null || results != undefined) {
            voter = {
              caseId: results.caseId,
              voter: results.voter,
              amountHold: results.amountHold,
              voteCredit: results.voteCredit,
            };
          }

          observer.next(voter);
          observer.complete();
        },
        error => {
          observer.next(undefined);
          observer.complete();
        }
      )
    });
  }

  public setVoterExtrinsic(data: VoterModel): Observable<any> {
    return new Observable<any>((observer) => {
      this.httpClient.post(this.defaultApiEndpoint + "/api/smart-contract/voter/extrinsic/set-voter", JSON.stringify(data), this.options).subscribe(
        response => {
          let results: any = response;

          observer.next(results);
          observer.complete();
        },
        error => {
          observer.next("");
          observer.complete();
        }
      );
    });
  }

  public getAllVote(): Observable<VoteModel[] | []> {
    return new Observable<VoteModel[]>((observer) => {
      let votes: VoteModel[] = [];

      this.httpClient.get(this.defaultApiEndpoint + '/api/smart-contract/vote/get/all-vote', this.options).subscribe(
        response => {
          let results: any = response;

          if (results.length > 0) {
            for (let i = 0; i < results.length; i++) {
              votes.push({
                caseId: results[i].caseId,
                evidenceId: results[i].evidenceId,
                voter: results[i].voter,
                yesCredit: results[i].yesCredit,
                noCredit: results[i].noCredit,
                destributionReward: results[i].destributionReward
              });
            }
          }

          observer.next(votes);
          observer.complete();
        },
        error => {
          observer.next([]);
          observer.complete();
        }
      )
    });
  }

  public getVoteById(id: number): Observable<VoteModel | undefined> {
    return new Observable<VoteModel | undefined>((observer) => {
      let vote: VoteModel = new VoteModel() || undefined;

      this.httpClient.get(this.defaultApiEndpoint + '/api/smart-contract/vote/get/vote/by-id/' + id, this.options).subscribe(
        response => {
          let results: any = response;

          if (results != null || results != undefined) {
            vote = {
              caseId: results.caseId,
              evidenceId: results.evidenceId,
              voter: results.voter,
              yesCredit: results.yesCredit,
              noCredit: results.noCredit,
              destributionReward: results.destributionReward
            };
          }

          observer.next(vote);
          observer.complete();
        },
        error => {
          observer.next(undefined);
          observer.complete();
        }
      )
    });
  }

  public setVoteExtrinsic(data: VoteModel): Observable<any> {
    return new Observable<any>((observer) => {
      this.httpClient.post(this.defaultApiEndpoint + "/api/smart-contract/vote/extrinsic/set-vote", JSON.stringify(data), this.options).subscribe(
        response => {
          let results: any = response;

          observer.next(results);
          observer.complete();
        },
        error => {
          observer.next("");
          observer.complete();
        }
      );
    });
  }
}
