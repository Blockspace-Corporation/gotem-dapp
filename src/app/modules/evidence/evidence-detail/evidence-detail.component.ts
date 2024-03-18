import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-evidence-detail',
  templateUrl: './evidence-detail.component.html',
  styleUrl: './evidence-detail.component.scss'
})
export class EvidenceDetailComponent {
  breadcrumbHome: MenuItem | undefined;
  breadcrumbItems: MenuItem[] | undefined;

  evidences: any[] = [];

  ngOnInit() {
    this.breadcrumbHome = { icon: 'pi pi-home', routerLink: '/app/dashboard' };
    this.breadcrumbItems = [
      { label: 'Dashboard' },
      { label: 'Case' },
      { label: 'Case Detail' },
    ];
  }
}
