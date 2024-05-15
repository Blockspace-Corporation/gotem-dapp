import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InvestigatorModel } from '../../models/investigator.model';
import { InvestigatorsService, Investigator } from '../../services/investigators/investigators.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-investigators',
  templateUrl: './investigators.component.html',
  styleUrl: './investigators.component.scss',
  providers: [MessageService]
})
export class InvestigatorsComponent {
  breadcrumbHome: MenuItem | undefined;
  breadcrumbItems: MenuItem[] | undefined;
  formData: any = {};
  investigator: Investigator[] = [];
  newInvestigator: Investigator = { investigator_id:0, profile_name: '', first_name: '', last_name: '', address: '', email: '', wallet_public_address: '' }

  constructor(
    private router: Router,
    public decimalPipe: DecimalPipe,
    private investigatorService: InvestigatorsService,
    private http: HttpClient
  ) { }

  isLoading: boolean = true;
  showNewInvestigatorModal: boolean = false;

  showProcessModal: boolean = false;
  isProcessing: boolean = false;

  public getAllInvestigators(): void {
    this.investigator = []
    this.investigatorService.getInvestigators().subscribe(
      result => {
        let data: any = result;
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            this.investigator.push({
              investigator_id: data[i].investigator_id,
              profile_name: data[i].profile_name,
              first_name: data[i].first_name,
              last_name: data[i].last_name,
              address: data[i].address,
              email: data[i].email,
              wallet_public_address: data[i].wallet_public_address
            });
          }
          console.log(this.investigator);
        }
        this.isLoading = false;
      },
      error => {}
    )
  }

  public openNewInvestigatorModal(): void {
    this.showNewInvestigatorModal = true;
  }

  public addInvestigator(): void {
    this.investigatorService.addInvestigator(this.newInvestigator).subscribe(investigator => {
      console.log(investigator);
      this.investigator.push(investigator);
      this.newInvestigator = { investigator_id: 0, profile_name: '', first_name: '', last_name: '', address: '', email: '', wallet_public_address: '' };
    });
  }
  
  ngOnInit() {
    this.breadcrumbHome = { icon: 'pi pi-home', routerLink: '/app/dashboard' };
    this.breadcrumbItems = [
      { label: 'Dashboard', routerLink: '/app/dashboard' },
      { label: 'Investigators' }
    ];
    this.getAllInvestigators();
  }

}
