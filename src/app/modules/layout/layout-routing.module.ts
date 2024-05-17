import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'case', loadChildren: () => import('../case/case.module').then(m => m.CaseModule) },
      { path: 'evidence', loadChildren: () => import('../evidence/evidence.module').then(m => m.EvidenceModule) },
      { path: 'vote', loadChildren: () => import('../vote/vote.module').then(m => m.VoteModule) },
      { path: 'investigator/register', loadChildren: () => import('../investigators/investigators.module').then(m => m.InvestigatorsModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
