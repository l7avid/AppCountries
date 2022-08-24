import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html'
})
export class SingleCountryComponent implements OnInit {

  country!: Country[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
        switchMap(({ countryId }) => this.countryService.getCoutryByCode(countryId)),
        tap(console.log))
      .subscribe((country) => {
        this.country = country;
      })
  }

}
