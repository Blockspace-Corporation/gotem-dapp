import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolkadotIdenticonComponent } from './shared/polkadot-identicon/polkadot-identicon.component';

const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'polkadot-identicon', component: PolkadotIdenticonComponent },
  // { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }, 
  { path: 'app', loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule) },
  { path: 'investigator', loadChildren: () => import('./modules/investigator/investigator.module').then(m => m.InvestigatorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
