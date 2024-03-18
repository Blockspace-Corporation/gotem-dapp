import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';

import { CaseRoutingModule } from './case-routing.module';
import { CaseComponent } from './case.component';
import { CaseDetailComponent } from './case-detail/case-detail.component';

@NgModule({
  declarations: [
    CaseComponent,
    CaseDetailComponent
  ],
  imports: [
    CommonModule,
    CaseRoutingModule,
    BreadcrumbModule,
    ToolbarModule,
    CardModule,
    PanelModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextareaModule,
    TableModule,
    FileUploadModule
  ]
})
export class CaseModule { }
