import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InvestigatorModel } from '../../models/investigator.model';
import { InvestigatorsService } from '../../services/investigators/investigators.service';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

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
    public decimalPipe: DecimalPipe,
    private messageService: MessageService,
    private investigatorService: InvestigatorsService
  ) { }

  investigator: InvestigatorModel = new InvestigatorModel();
  isProcessing: boolean = false;

  credentialsFilesToBeUploaded: any[] = [];
  profilePictureFilesToBeUploaded: any[] = [];

  uploadedCredentialsFile: File | null = null;
  uploadedProfilePictureFile: File | null = null;

  public registerInvestigator(): void {
    if (this.investigator.profile_name == "") {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Profile name is required." });
    } else if (this.investigator.first_name == "") {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "First name is required." });
    } else if (this.investigator.last_name == "") {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Last name is required." });
    } else if (this.investigator.address == "") {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Address is required." });
    } else if (this.investigator.email == "") {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Email is required." });
    } else if (this.investigator.wallet_public_address == "") {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Wallet public address is required." });
    } else {
      if (this.investigator.email != this.investigator.retype_email) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: "Email and Retype email do not match." });
      } else {
        this.isProcessing = true;
        this.investigatorService.registerInvestigator(this.investigator).subscribe(
          result => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: "Registration Successful" });

            this.investigator = new InvestigatorModel();
            this.isProcessing = false;
          },
          error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
            this.isProcessing = false;
          }
        );
      }
    }
  }

  onUploadCredentials(event: UploadEvent) {
    this.uploadedCredentialsFile = event.files[0];
    this.isProcessing = true;

    this.investigatorService.uploadFile(this.uploadedCredentialsFile).subscribe(
      result => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: "Credentials Uploaded" });

        this.investigator.credentials = result.url;
        this.isProcessing = false;

        this.credentialsFilesToBeUploaded = [];
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
        this.isProcessing = false;
      }
    );
  }

  onUploadProfilePicture(event: UploadEvent) {
    this.uploadedProfilePictureFile = event.files[0];
    this.isProcessing = true;

    this.investigatorService.uploadFile(this.uploadedProfilePictureFile).subscribe(
      result => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: "Profile Picture Uploaded" });

        this.investigator.profile_picture = result.url;
        this.isProcessing = false;

        this.profilePictureFilesToBeUploaded = [];
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
        this.isProcessing = false;
      }
    );
  }

  ngOnInit() {
    this.breadcrumbHome = { icon: 'pi pi-home', routerLink: '/app/dashboard' };
    this.breadcrumbItems = [
      { label: 'Dashboard', routerLink: '/app/dashboard' },
      { label: 'Investigator Registration' }
    ];
  }
}
