import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

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
    FormsModule,
    ReactiveFormsModule,
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
    FileUploadModule,
    DropdownModule,
    DialogModule,
    ProgressSpinnerModule,
    TagModule,
    ChipModule,
    ButtonModule,
    ToastModule
  ],
  providers: [
    DecimalPipe
  ]
})
export class CaseModule { }
