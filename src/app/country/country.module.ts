import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { SingleCountryComponent } from './pages/single-country/single-country.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    SingleCountryComponent
  ],
  exports: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    SingleCountryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CountryModule { }
