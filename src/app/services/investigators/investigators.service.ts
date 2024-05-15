import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Investigator {
  investigator_id: number;
  profile_name: string;
  first_name: string;
  last_name: string;
  address: string;
  email: string;
  wallet_public_address: string;
}

@Injectable({
  providedIn: 'root',
})
export class InvestigatorsService {
  apiUrl = 'http://localhost:3000/investigator';
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private http: HttpClient) {}
  getInvestigators() {
    return this.http.get<Investigator[]>(this.apiUrl);
  }
  addInvestigator(investigator: Investigator): Observable<Investigator> {
    return this.http.post<Investigator>(this.apiUrl, investigator)
  }
  deleteInvestigator(investigator_id: number) {
    return this.http.delete(`${this.apiUrl}/${investigator_id}`);
  }
}