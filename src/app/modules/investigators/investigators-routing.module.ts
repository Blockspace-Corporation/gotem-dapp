import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestigatorsComponent } from './investigators.component';

const routes: Routes = [
  { path: '', component: InvestigatorsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestigatorsRoutingModule { }
