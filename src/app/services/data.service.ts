import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ICountry } from '../models/country';
import { ICountryDetail } from '../models/detail';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public countrySubject = new BehaviorSubject<ICountry[]>([]);
  countries$: Observable<ICountry[]>= this.countrySubject.asObservable();

  COUNTRIES:ICountry[]= [];

  constructor(private http: HttpClient) { }

  setSearchTerm(term:string){
    let tempArray = [];
    this.COUNTRIES.forEach( country => {
      if(country.name.includes(term)) tempArray.push(country);
      this.countrySubject.next(tempArray)
  })
  }

  setCountries(countries:ICountry[]) {
    this.COUNTRIES = countries;
  }

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
