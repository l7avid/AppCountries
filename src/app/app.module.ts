import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CountryModule } from './country/country.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CountryModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
