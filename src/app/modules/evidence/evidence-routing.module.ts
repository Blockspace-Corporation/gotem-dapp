import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvidenceComponent } from './evidence.component';
import { EvidenceDetailComponent } from './evidence-detail/evidence-detail.component';

const routes: Routes = [
  { path: '', component: EvidenceComponent },
  { path: 'detail/:id', component: EvidenceDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvidenceRoutingModule { }
