import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../../app-settings';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Observable, Subject } from 'rxjs';
import { CaseNftModel } from '../../models/case-nft.model';

@Injectable({
  providedIn: 'root'
})
export class SmartContractCaseService {

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

  public getAllCase(): Observable<CaseNftModel[] | []> {
    return new Observable<CaseNftModel[]>((observer) => {
      let caseNFTs: CaseNftModel[] = [];

      this.httpClient.get(this.defaultApiEndpoint + '/api/smart-contract/case/get/all-case', this.options).subscribe(
        response => {
          let results: any = response;

          if (results.length > 0) {
            for (let i = 0; i < results.length; i++) {
              caseNFTs.push({
                caseId: results[i].caseId,
                title: results[i].title,
                description: results[i].description,
                category: results[i].category,
                owner: results[i].owner,
                bounty: results[i].bounty,
                file: results[i].file,
                status: results[i].status
              });
            }
          }

          observer.next(caseNFTs);
          observer.complete();
        },
        error => {
          observer.error([]);
          observer.complete();
        }
      )
    });
  }

  public getCaseById(id: number): Observable<CaseNftModel | undefined> {
    return new Observable<CaseNftModel | undefined>((observer) => {
      let caseNFT: CaseNftModel = new CaseNftModel() || undefined;

      this.httpClient.get(this.defaultApiEndpoint + '/api/smart-contract/case/get/case/by-id/' + id, this.options).subscribe(
        response => {
          let results: any = response;

          if (results != null || results != undefined) {
            caseNFT = {
              caseId: results.caseId,
              title: results.title,
              description: results.description,
              category: results.category,
              owner: results.owner,
              bounty: results.bounty,
              file: results.file,
              status: results.status
            };
          }

          observer.next(caseNFT);
          observer.complete();
        },
        error => {
          observer.error(undefined);
          observer.complete();
        }
      )
    });
  }

  public setCaseExtrinsic(data: CaseNftModel): Observable<any> {
    return new Observable<any>((observer) => {
      this.httpClient.post(this.defaultApiEndpoint + "/api/smart-contract/case/extrinsic/set-case", JSON.stringify(data), this.options).subscribe(
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
