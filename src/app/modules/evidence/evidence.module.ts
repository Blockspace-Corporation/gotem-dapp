import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';

import { EvidenceRoutingModule } from './evidence-routing.module';
import { EvidenceComponent } from './evidence.component';

@NgModule({
  declarations: [
    EvidenceComponent
  ],
  imports: [
    CommonModule,
    EvidenceRoutingModule,
    BreadcrumbModule,
    CardModule,
    PanelModule
  ]
})
export class EvidenceModule { }
