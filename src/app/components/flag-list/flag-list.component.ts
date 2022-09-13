
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable,of } from 'rxjs';
import { filter, map,tap, take, combineLatest } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { LoadCountries } from 'src/app/store/actions/countries.actions';
import { CountriesState } from 'src/app/store/reducers/countries.reducers';
import { selectAllCountries, selectCountriesError, selectCountriesLoaded,searchQuery } from 'src/app/store/selectors/countries.selectors';

@Component({
  selector: 'app-flag-list',
  templateUrl: './flag-list.component.html',
  styleUrls: ['./flag-list.component.scss']
})
export class FlagListComponent implements OnInit {

  countryList$: Observable<CountriesState>;
  countryListLoaded$:Observable<boolean>;
  isCountriesLoaded: boolean = false;
  //errorMessage$:  Observable<string>;
  term:string;
  term2: any
  searchTerm$:any;

  constructor( private store: Store, private dataService: DataService) { }

  ngOnInit(): void {
    this.countryList$ = this.store.select((selectAllCountries))
    // .pipe(
    //   filter(val=> val),
    //   tap(val => {
    //     this.dataService.searchQuery$.subscribe(
    //       val=> this.searchTerm$ ==val
    //     );
    //   }),
    //   tap(val=>console.log(val)),

    // )

    this.countryListLoaded$ = this.store.select((selectCountriesLoaded))
    console.log(this.term)

    this.countryListLoaded$.pipe(
      map(val => this.isCountriesLoaded = val)
    ).subscribe()

    if(!this.isCountriesLoaded) this.store.dispatch(LoadCountries())
   // this.errorMessage$ = this.store.select((selectCountriesError));
  }

  filterSearch(countries) {
    return countries.filter(country => country.name == 'Turkey')
  }

  getSearchItem() {
    return this.dataService.searchQuery$
    .subscribe(val=> this.searchTerm$ ==val);
  }

}
