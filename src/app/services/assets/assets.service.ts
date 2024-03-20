import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../../app-settings';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Observable, Subject } from 'rxjs';
import { AssetModel } from '../../models/assets.model';
import { AssetMetadataModel } from '../../models/assets.model';
import { web3FromAddress } from '@polkadot/extension-dapp';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

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
    })
  };

  public getAssets(): Observable<AssetModel[]> {
    return new Observable<AssetModel[]>((observer) => {
      let assets: AssetModel[] = [];

      this.httpClient.get(this.defaultApiEndpoint + '/api/assets/get/assets', this.options).subscribe(
        response => {
          let results: any = response;

          if (results.length > 0) {
            for (let i = 0; i < results.length; i++) {
              let metadata: AssetMetadataModel = {
                asset_id: results[i].metadata.asset_id,
                deposit: results[i].metadata.deposit,
                name: results[i].metadata.name,
                symbol: results[i].metadata.symbol,
                decimals: results[i].metadata.decimals,
                isFrozen: results[i].metadata.isFrozen
              }

              assets.push({
                id: results[i].id,
                accounts: results[i].accounts,
                admin: results[i].admin,
                approvals: results[i].approvals,
                deposit: results[i].deposit,
                freezer: results[i].freezer,
                isSufficient: results[i].isSufficient,
                issuer: results[i].issuer,
                minBalance: results[i].minBalance,
                owner: results[i].owner,
                status: results[i].status,
                sufficients: results[i].sufficients,
                supply: results[i].supply,
                metadata: metadata
              });
            }
          }

          observer.next(assets);
          observer.complete();
        },
        error => {
          observer.next([]);
          observer.complete();
        }
      )
    });
  }

  public getAssetBalanceByAccount(assetId: number, keypair: string): Observable<number> {
    return new Observable<number>((observer) => {
      this.httpClient.get(this.defaultApiEndpoint + '/api/assets/get/asset-balance-by-account/' + assetId + '/' + keypair, this.options).subscribe(
        response => {
          let results: any = response;

          observer.next(results);
          observer.complete();
        },
        error => {
          observer.next(0);
          observer.complete();
        }
      )
    });
  }

  public transferExtrinsic(id: number, target: string, amount: number): Observable<any> {
    return new Observable<any>((observer) => {
      let data = {
        id: id,
        target: target,
        amount: amount
      }

      this.httpClient.post(this.defaultApiEndpoint + "/api/assets/extrinsic/transfer", JSON.stringify(data), this.options).subscribe(
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

  public async signExtrinsics(extrinsics: string): Promise<any> {
    const api = await this.api;

    const injector = await web3FromAddress(this.keypair);
    api.setSigner(injector.signer);

    const unsignedExtrinsics = api.tx(extrinsics);
    let signedExtrinsics = (await unsignedExtrinsics.signAsync(this.keypair)).toHex();

    if (signedExtrinsics) {
      return signedExtrinsics;
    }
  }

  public executeExtrinsics(signedExtrinsics: string): Observable<any> {
    return new Observable<any>((observer) => {
      let data = {
        signedExtrincs: signedExtrinsics
      }

      this.httpClient.post(this.defaultApiEndpoint + "/api/assets/extrinsics/execute", JSON.stringify(data), this.options).subscribe(
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
