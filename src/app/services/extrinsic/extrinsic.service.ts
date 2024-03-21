import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { web3FromAddress } from '@polkadot/extension-dapp';
import { AppSettings } from '../../app-settings';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtrinsicService {

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

      this.httpClient.post(this.defaultApiEndpoint + "/api/extrinsic/execute", JSON.stringify(data), this.options).subscribe(
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
