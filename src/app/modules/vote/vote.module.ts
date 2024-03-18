import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TableModule } from 'primeng/table';

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
    ToolbarModule,
    CardModule,
    PanelModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    TableModule
  ]
})
export class VoteModule { }
