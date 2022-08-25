import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private URLApi: string = "https://restcountries.com/v3.1"

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population')
  }

  constructor( private http: HttpClient) { }

  searchCountry( element: string ): Observable<Country[]> {
    const url = `${ this.URLApi }/name/${ element }`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchCapital( element: string ): Observable<Country[]> {
    const url = `${ this.URLApi }/capital/${ element }`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getCoutryByCode( countryId: string ): Observable<Country> {
    const url = `${ this.URLApi }/alpha/${ countryId }`;
    return this.http.get<Country>(url);
  }

  searchByRegion( regionCode: string ): Observable<Country[]> {

    const url = `${ this.URLApi }/region/${ regionCode }`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
