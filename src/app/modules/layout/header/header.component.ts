import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }

  headerMenuItems: MenuItem[] | undefined;
  networkMenuItems: MenuItem[] | undefined;

  walletName = localStorage.getItem("wallet-meta-name") || "";
  address = localStorage.getItem("wallet-address") || "";
  keypair = localStorage.getItem("wallet-keypair") || "";

  isSidebarCollapsed = false;

  public toggleSidebarOnclick(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    this.toggleSidebar.emit(this.isSidebarCollapsed);
  }

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
  
  ngOnInit() {
    this.networkMenuItems = [
      {
        label: 'Development'
      },
      {
        label: 'Test Net'
      },
      {
        label: 'Main Net'
      }
    ];
  }
}
