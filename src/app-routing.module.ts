import { NgModule } from "@angular/core";
import { Routes } from '@angular/router';
import { ByCapitalComponent } from './app/country/pages/by-capital/by-capital.component';
import { ByCountryComponent } from './app/country/pages/by-country/by-country.component';
import { ByRegionComponent } from './app/country/pages/by-region/by-region.component';
import { SingleCountryComponent } from './app/country/pages/single-country/single-country.component';

const routes: Routes = [
    {
        path: '',
        component: ByCountryComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: ByRegionComponent,
    },
    {
        path: 'capital',
        component: ByCapitalComponent,
    },
    {
        path: '/country/:countryId',
        component: SingleCountryComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [

    ],
    exports: [

    ]
})
export class AppRoutingModule {}