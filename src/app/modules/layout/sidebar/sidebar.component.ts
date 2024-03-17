import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() isCollapsed: boolean = false;

  items: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-fw pi-desktop',
      routerLink: '/app/dashboard'
    },
    {
      label: 'Case',
      icon: 'pi pi-fw pi-briefcase',
      routerLink: '/app/case'
    },
    {
      label: 'Evidence',
      icon: 'pi pi-fw pi-folder-open',
      routerLink: '/app/evidence'
    },
    {
      label: 'Vote',
      icon: 'pi pi-fw pi-check-square',
      routerLink: '/app/vote'
    }
  ];

  ngOnInit() {

  }
}
