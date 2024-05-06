import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestigatorsRoutingModule } from './investigators-routing.module';
import { InvestigatorsComponent } from './investigators.component';


@NgModule({
  declarations: [
    InvestigatorsComponent
  ],
  imports: [
    CommonModule,
    InvestigatorsRoutingModule
  ]
})
export class InvestigatorsModule { }
