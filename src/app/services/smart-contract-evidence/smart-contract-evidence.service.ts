import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../../app-settings';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Observable, Subject } from 'rxjs';
import { EvidenceNftModel } from '../../models/evidence-nft.model';

@Injectable({
  providedIn: 'root'
})
export class SmartContractEvidenceService {

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

  public getAllEvidence(): Observable<EvidenceNftModel[] | []> {
    return new Observable<EvidenceNftModel[]>((observer) => {
      let evidenceNFTs: EvidenceNftModel[] = [];

      this.httpClient.get(this.defaultApiEndpoint + '/api/smart-contract/evidence/get/all-evidence', this.options).subscribe(
        response => {
          let results: any = response;

          if (results.length > 0) {
            for (let i = 0; i < results.length; i++) {
              evidenceNFTs.push({
                evidenceId: results[i].evidenceId,
                description: results[i].description,
                owner: results[i].owner,
                file: results[i].file,
                caseId: results[i].caseId,
                caseTitle: results[i].caseTitle,
                status: results[i].status
              });
            }
          }

          observer.next(evidenceNFTs);
          observer.complete();
        },
        error => {
          observer.error([]);
          observer.complete();
        }
      )
    });
  }

  public getEvidenceById(id: number): Observable<EvidenceNftModel | undefined> {
    return new Observable<EvidenceNftModel | undefined>((observer) => {
      let evidenceNFT: EvidenceNftModel = new EvidenceNftModel() || undefined;

      this.httpClient.get(this.defaultApiEndpoint + '/api/smart-contract/evidence/get/evidence/by-id/' + id, this.options).subscribe(
        response => {
          let results: any = response;

          if (results != null || results != undefined) {
            evidenceNFT = {
              evidenceId: results.evidenceId,
              description: results.description,
              owner: results.owner,
              file: results.file,
              caseId: results.caseId,
              caseTitle: results.caseTitle,
              status: results.status
            };
          }

          observer.next(evidenceNFT);
          observer.complete();
        },
        error => {
          observer.error(undefined);
          observer.complete();
        }
      )
    });
  }

  public getAllEvidenceByCaseId(caseId: number): Observable<EvidenceNftModel[] | []> {
    return new Observable<EvidenceNftModel[]>((observer) => {
      let evidenceNFTs: EvidenceNftModel[] = [];

      this.httpClient.get(this.defaultApiEndpoint + '/api/smart-contract/evidence/get/all-evidence/by-case-id/' + caseId, this.options).subscribe(
        response => {
          let results: any = response;

          if (results.length > 0) {
            for (let i = 0; i < results.length; i++) {
              evidenceNFTs.push({
                evidenceId: results[i].evidenceId,
                description: results[i].description,
                owner: results[i].owner,
                file: results[i].file,
                caseId: results[i].caseId,
                caseTitle: results[i].caseTitle,
                status: results[i].status
              });
            }
          }

          observer.next(evidenceNFTs);
          observer.complete();
        },
        error => {
          observer.error([]);
          observer.complete();
        }
      )
    });
  }

  public setEvidenceExtrinsic(data: EvidenceNftModel): Observable<any> {
    return new Observable<any>((observer) => {
      this.httpClient.post(this.defaultApiEndpoint + "/api/smart-contract/evidence/extrinsic/set-evidence", JSON.stringify(data), this.options).subscribe(
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

  public updateEvidenceExtrinsic(id: number, data: EvidenceNftModel): Observable<any> {
    return new Observable<any>((observer) => {
      this.httpClient.put(this.defaultApiEndpoint + "/api/smart-contract/evidence/extrinsic/update-evidence/" + id, JSON.stringify(data), this.options).subscribe(
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

  public burnEvidenceExtrinsic(id: number): Observable<any> {
    return new Observable<any>((observer) => {
      this.httpClient.delete(this.defaultApiEndpoint + "/api/smart-contract/evidence/extrinsic/burn-evidence/" + id, this.options).subscribe(
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
