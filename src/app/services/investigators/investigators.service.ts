import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../../app-settings';
import { Observable, Subject } from 'rxjs';
import { InvestigatorModel } from '../../models/investigator.model';

@Injectable({
  providedIn: 'root',
})
export class InvestigatorsService {

  constructor(
    private appSettings: AppSettings,
    private httpClient: HttpClient
  ) { }

  defaultApiEndpoint: string = this.appSettings.apiEndpoint;
  options: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  registerInvestigator(data: InvestigatorModel): Observable<any> {
    return new Observable<any>((observer) => {
      this.httpClient.post(this.defaultApiEndpoint + "/api/investigator/register", JSON.stringify(data), this.options).subscribe(
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

  uploadFile(file: File): Observable<any> {
    return new Observable<any>((observer) => {
      const formData = new FormData();
      formData.append('file', file);

      this.httpClient.post(this.defaultApiEndpoint + "/api/investigator/upload", formData).subscribe(
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