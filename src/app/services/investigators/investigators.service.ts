import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class InvestigatorsService {
  host = 'http://localhost:3000';
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private http: HttpClient) {}
  getInvestigators() {
    return this.http.get(`${this.host}/investigator`).pipe(map((res) => res));
  }
  addInvestigator(investigator: string) {
    return this.http.post(`${this.host}/investigator`, {
      name: investigator,
      completed: false,
    });
  }
  deleteInvestigator(investigator_id: number) {
    return this.http.delete(`${this.host}/investigator/${investigator_id}`);
  }
}