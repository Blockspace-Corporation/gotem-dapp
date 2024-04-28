import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestigatorRoutingModule } from './investigator-routing.module';
import { InvestigatorComponent } from './investigator.component';


@NgModule({
  declarations: [
    InvestigatorComponent
  ],
  imports: [
    CommonModule,
    InvestigatorRoutingModule
  ]
})
export class InvestigatorModule { }
