import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ExecuteExtrinsicsStatusModel } from '../../models/execution-extrinsics-status.model';
import { InvestigatorModel } from '../../models/investigator.model';
import { InvestigatorsService } from '../../services/investigators/investigators.service';

@Component({
  selector: 'app-investigators',
  templateUrl: './investigators.component.html',
  styleUrl: './investigators.component.scss',
  providers: [MessageService]
})
export class InvestigatorsComponent {
  breadcrumbHome: MenuItem | undefined;
  breadcrumbItems: MenuItem[] | undefined;

  constructor(
    private router: Router,
    public decimalPipe: DecimalPipe,
    private messageService: MessageService,
    private investigatorModel: InvestigatorModel,
    private investigatorService: InvestigatorsService
  ) { }

  isLoading: boolean = true;
  investigators: InvestigatorModel[] = [];
  showNewInvestigatorModal: boolean = false;
  newInvestigator: InvestigatorModel = new InvestigatorModel();

  showProcessModal: boolean = false;
  isProcessing: boolean = false;

  executionExtrinsicsStatus: ExecuteExtrinsicsStatusModel | undefined;

  public getAllInvestigators(): void {
    this.investigators = []
    this.investigatorService.getInvestigators().subscribe(
      result => {
        let data: any = result;
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            this.investigators.push({
              investigator_id: data[i].investigator_id,
              profile_name: data[i].profile_name,
              first_name: data[i].first_name,
              last_name: data[i].last_name,
              address: data[i].address,
              email: data[i].email,
              wallet_public_address: data[i].wallet_public_address
            });
          }
          console.log(this.investigators);
        }
        this.isLoading = false;
      },
      error => {}
    )
  }

  public openNewInvestigatorModal(): void {
    this.showNewInvestigatorModal = true;
  }

  public createInvestigator(): void {
    this.investigatorService.addInvestigator(this.newInvestigator.profile_name).subscribe(
      result => {
        let data:any = result;
        console.log(data);
        this.showProcessModal;
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error });
      }
    )
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
