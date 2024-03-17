import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { WalletComponent } from './wallet.component';
import { AccountsComponent } from './accounts/accounts.component';

@NgModule({
  declarations: [
    WalletComponent,
    AccountsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule
  ],
  exports: [
    AccountsComponent
  ]
})
export class WalletModule { }
