import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [`
  li {
    cursor: pointer;
  }
  `
  ]
})
export class ByCountryComponent {

  element: string = ""
  errorExist: boolean = false;
  countries:  Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggestions: boolean = false;

  constructor( private countryService: CountryService ) { }

  search(element: string){
    this.errorExist = false;
    this.element = element;

    this.countryService.searchCountry(this.element).subscribe((countries) => {
      console.log(countries);
      this.countries = countries;
      
    }, (error) => {
      this.errorExist = true;
      this.countries = [];
    })
  }

  suggestions(element: string){
    this.showSuggestions = true;
    this.errorExist = false;
    this.element = element;
    this.countryService.searchCountry(element).subscribe((countries) =>
      this.suggestedCountries = countries.splice(0,4),
      (err) => this.suggestedCountries = []
    )
  }

}
