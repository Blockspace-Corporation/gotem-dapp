import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppSettings } from './app-settings';

import { PolkadotIdentIconModule } from 'polkadot-angular-identicon';
import { PolkadotIdenticonComponent } from './shared/polkadot-identicon/polkadot-identicon.component';

@NgModule({
  declarations: [
    AppComponent,
    PolkadotIdenticonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PolkadotIdentIconModule,
  ],
  providers: [
    AppSettings
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
