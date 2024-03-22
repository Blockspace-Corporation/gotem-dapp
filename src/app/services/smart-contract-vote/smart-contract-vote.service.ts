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

      this.httpClient.get(this.defaultApiEndpoint + '/api/smart-contract/vote/get/all-voter', this.options).subscribe(
        response => {
          let results: any = response;

          if (results.length > 0) {
            for (let i = 0; i < results.length; i++) {
              voters.push({
                voterId: results[i].voterId,
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
          observer.error([]);
          observer.complete();
        }
      )
    });
  }

  public getVoterById(id: number): Observable<VoterModel | undefined> {
    return new Observable<VoterModel | undefined>((observer) => {
      let voter: VoterModel = new VoterModel() || undefined;

      this.httpClient.get(this.defaultApiEndpoint + '/api/smart-contract/vote/get/voter/by-id/' + id, this.options).subscribe(
        response => {
          let results: any = response;

          if (results != null || results != undefined) {
            voter = {
              voterId: results.voterId,
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
          observer.error(undefined);
          observer.complete();
        }
      )
    });
  }

  public setVoterExtrinsic(data: VoterModel): Observable<any> {
    return new Observable<any>((observer) => {
      this.httpClient.post(this.defaultApiEndpoint + "/api/smart-contract/vote/extrinsic/set-voter", JSON.stringify(data), this.options).subscribe(
        response => {
          let results: any = response;

          observer.next(results);
          observer.complete();
        },
        error => {
          observer.error(error);
          observer.complete();
        }
      );
    });
  }

  public updateVoterExtrinsic(id: number, data: VoterModel): Observable<any> {
    return new Observable<any>((observer) => {
      this.httpClient.put(this.defaultApiEndpoint + "/api/smart-contract/vote/extrinsic/update-voter/" + id, JSON.stringify(data), this.options).subscribe(
        response => {
          let results: any = response;

          observer.next(results);
          observer.complete();
        },
        error => {
          observer.error(error);
          observer.complete();
        }
      );
    });
  }

  public burnVoterExtrinsic(id: number): Observable<any> {
    return new Observable<any>((observer) => {
      this.httpClient.delete(this.defaultApiEndpoint + "/api/smart-contract/vote/extrinsic/burn-voter/" + id, this.options).subscribe(
        response => {
          let results: any = response;

          observer.next(results);
          observer.complete();
        },
        error => {
          observer.error(error);
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
                voteId: results[i].voteId,
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
          observer.error([]);
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
              voteId: results.voteId,
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
          observer.error(undefined);
          observer.complete();
        }
      )
    });
  }

  public getAllVoteByEvidenceId(evidenceId: number): Observable<VoteModel[] | []> {
    return new Observable<VoteModel[]>((observer) => {
      let votes: VoteModel[] = [];

      this.httpClient.get(this.defaultApiEndpoint + '/api/smart-contract/vote/get/all-vote/by-evidence-id/' + evidenceId, this.options).subscribe(
        response => {
          let results: any = response;

          if (results.length > 0) {
            for (let i = 0; i < results.length; i++) {
              votes.push({
                voteId: results[i].voteId,
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
          observer.error([]);
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
          observer.error(error);
          observer.complete();
        }
      );
    });
  }

  public updateVoteExtrinsic(id: number, data: VoteModel): Observable<any> {
    return new Observable<any>((observer) => {
      this.httpClient.put(this.defaultApiEndpoint + "/api/smart-contract/vote/extrinsic/update-vote/" + id, JSON.stringify(data), this.options).subscribe(
        response => {
          let results: any = response;

          observer.next(results);
          observer.complete();
        },
        error => {
          observer.error(error);
          observer.complete();
        }
      );
    });
  }

  public burnVoteExtrinsic(id: number): Observable<any> {
    return new Observable<any>((observer) => {
      this.httpClient.delete(this.defaultApiEndpoint + "/api/smart-contract/vote/extrinsic/burn-vote/" + id, this.options).subscribe(
        response => {
          let results: any = response;

          observer.next(results);
          observer.complete();
        },
        error => {
          observer.error(error);
          observer.complete();
        }
      );
    });
  }
}
