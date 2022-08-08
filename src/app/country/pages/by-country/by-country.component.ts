import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html'
})
export class ByCountryComponent {

  element: string = ""
  errorExist: boolean = false;
  countries:  Country[] = [];

  constructor( private countryService: CountryService ) { }

  search(){
    this.errorExist = false;
    console.log(this.element);

    this.countryService.searchCountry(this.element).subscribe((countries) => {
      console.log(countries);
      this.countries = countries;
      
    }, (error) => {
      this.errorExist = true;
      this.countries = [];
    })
    
  }

}
