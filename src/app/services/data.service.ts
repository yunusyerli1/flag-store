import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ICountry } from '../models/country';
import { ICountryDetail } from '../models/detail';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  public getCountries(): Observable<ICountry[]> {
    return this.http.get<any[]>(environment.countriesUrl + "/all")
    .pipe(
      map((countries:any[]) => {
        return countries.map(country =>
        ({
          name: country.name["common"],
          population:country.population,
          region:country.region,
          capital:country.capital?.[0],
          flag:country.flags["png"],
          code:country.tld?.[0].slice(1,country.tld?.[0].length)
        })
        )
      }
      ),
      tap(res => console.log(res))
    )
  }

  public getDetail(params:string): Observable<ICountryDetail> {
    return  this.http.get<any>(environment.countriesUrl + "/alpha/" + params).pipe(
      map( detail => detail[0])
    );
  }

}
