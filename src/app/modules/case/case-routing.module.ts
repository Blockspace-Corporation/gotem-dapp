import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseComponent } from './case.component';
import { CaseDetailComponent } from './case-detail/case-detail.component';

const routes: Routes = [
  { path: '', component: CaseComponent },
  { path: 'detail/:id', component: CaseDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseRoutingModule { }
