import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ICountry } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  public getCountries(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(environment.countriesUrl + "/all")
    .pipe(
      map((countries:ICountry[]) => {
        return countries.map(country =>
        ({
          name: country.name["common"],
          population:country.population,
          region:country.region,
          capital:country.capital?.[0],
          flags:country.flags["png"],
          tld:country.tld?.[0].slice(1,country.tld?.[0].length)
        })
        )
      }
      ),
      tap(res => console.log(res))
    )
  }

  public getDetail(params:string): Observable<any> {
    return  this.http.get<any>(environment.countriesUrl + "/alpha/" + params).pipe(
      map( detail => detail[0])
    );
  }

}
