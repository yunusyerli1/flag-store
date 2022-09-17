
import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, interval, Observable,of, Subscription } from 'rxjs';
import { filter, map,tap, take, combineLatest, count } from 'rxjs/operators';
import { ICountry } from 'src/app/models/country';
import { DataService } from 'src/app/services/data.service';
import { LoadCountries } from 'src/app/store/actions/countries.actions';
import { CountriesState } from 'src/app/store/reducers/countries.reducers';
import { selectAllCountries, selectCountriesError, selectCountriesLoaded,searchQuery } from 'src/app/store/selectors/countries.selectors';

@Component({
  selector: 'app-flag-list',
  templateUrl: './flag-list.component.html',
  styleUrls: ['./flag-list.component.scss']
})
export class FlagListComponent implements OnInit, OnDestroy {

  private countryListSubject = new BehaviorSubject<ICountry[]>([]);
  countryList$: Observable<ICountry[]>= this.countryListSubject.asObservable();

  countryListLoaded$:Observable<boolean>;
  isCountriesLoaded: boolean = false;
  //errorMessage$:  Observable<string>;

  searchItem:string;

  subscription1$:Subscription;
  subscription2$:Subscription;
  subscription3$:Subscription;

  countriesTemp:ICountry[];

  data$= interval(1000);

  constructor( private store: Store, private dataService: DataService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.subscription1$ = this.store.select((selectAllCountries)).pipe(
      map(countries => {
        this.countryListSubject.next(countries)
        this.countriesTemp = countries;

      })
    ).subscribe();

    this.subscription2$ = this.store.select((selectCountriesLoaded)).pipe(
      map(val => this.isCountriesLoaded = val)
    ).subscribe()


     if(!this.isCountriesLoaded) this.store.dispatch(LoadCountries())
     // this.errorMessage$ = this.store.select((selectCountriesError));

     this.subscription3$ = this.dataService.searchTerm$.subscribe(
      term => {
        this.searchItem = term;
        this.searcForCountries(this.searchItem)
      }
     );
  }

  searcForCountries(word:string) {
    let tempArray = [];
    this.countriesTemp.forEach(country => {
      if(country.name.includes(word)) tempArray.push(country);
      this.countryListSubject.next(tempArray)
    })
  }

  ngOnDestroy(): void {
      this.subscription1$.unsubscribe();
      this.subscription2$.unsubscribe();
      this.subscription3$.unsubscribe();

  }

}
