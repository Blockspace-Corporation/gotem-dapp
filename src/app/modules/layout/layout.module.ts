import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { WalletModule } from '../wallet/wallet.module';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    WalletModule,
    LayoutRoutingModule,
    MenuModule,
    MenubarModule,
    ButtonModule,
    DialogModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    DecimalPipe
  ]
})
export class LayoutModule { }
