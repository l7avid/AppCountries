import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html'
})
export class ByCapitalComponent {

  element: string = ""
  errorExist: boolean = false;
  countries:  Country[] = [];

  constructor( private countryService: CountryService ) { }

  search( element: string ){
    this.errorExist = false;
    this.element = element;

    this.countryService.searchCapital(this.element).subscribe((countries) => {
      this.countries = countries;
      
    }, (error) => {
      this.errorExist = true;
      this.countries = [];
    })
  }

}
