import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';

import { VoteRoutingModule } from './vote-routing.module';
import { VoteComponent } from './vote.component';

@NgModule({
  declarations: [
    VoteComponent
  ],
  imports: [
    CommonModule,
    VoteRoutingModule,
    BreadcrumbModule,
    CardModule,
    PanelModule
  ]
})
export class VoteModule { }
