import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap} from 'rxjs/operators';
import { ICountry } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL: string = "https://restcountries.com/v3.1/";

  constructor(private http: HttpClient) { }

  public getCountries(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(this.baseURL+ "all")
    .pipe(
      map((countries:ICountry[]) => {
        return countries.map(country =>
        ({
          name: country.name["common"],
          population:country.population,
          region:country.region,
          capital:country.capital?.[0],
          flags:country.flags["png"],
          tld:country.tld?.[0]
        })
        )
      }


      ),
      tap(res => console.log(res))
    )
  }

}


// return {
//   name: country.name.common,
//   population:country.population,
//   region:country.region;
//   capital:country.capital[0];
// }


// map((country) => {
//   return {
  // name: country.name.common,
  // population:country.population,
  // region:country.region,
  // capital:country.capital[0]
//   }
// }
// )
