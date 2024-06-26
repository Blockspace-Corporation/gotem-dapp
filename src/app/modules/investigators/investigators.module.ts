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
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

import { InvestigatorsRoutingModule } from './investigators-routing.module';
import { InvestigatorsComponent } from './investigators.component';
import { InvestigatorModel } from '../../models/investigator.model';

@NgModule({
  declarations: [
    InvestigatorsComponent
  ],
  imports: [
    CommonModule,
    InvestigatorsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
    ProgressBarModule,
    TagModule,
    ChipModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule
  ],
  providers: [
    DecimalPipe,
    InvestigatorModel
  ]
})
export class InvestigatorsModule { }
