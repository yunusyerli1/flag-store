
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable,of } from 'rxjs';
import { filter, map,tap, take, combineLatest } from 'rxjs/operators';
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
export class FlagListComponent implements OnInit {

  countryList$: Observable<CountriesState>;
  countryListTemp$: Observable<CountriesState>;
  countryListLoaded$:Observable<boolean>;
  isCountriesLoaded: boolean = false;
  //errorMessage$:  Observable<string>;


  constructor( private store: Store, public dataService: DataService) { }

  ngOnInit(): void {
    this.countryList$ = this.store.select((selectAllCountries))
   this.store.select((selectAllCountries)).subscribe(countries => {
    this.dataService.setCountries(countries);
    this.dataService.countrySubject.next(countries)
  })
    this.countryListTemp$ = this.countryList$;


    this.countryListLoaded$ = this.store.select((selectCountriesLoaded))

    this.countryListLoaded$.pipe(
      map(val => this.isCountriesLoaded = val)
    ).subscribe()

    if(!this.isCountriesLoaded) this.store.dispatch(LoadCountries())
   // this.errorMessage$ = this.store.select((selectCountriesError));
  }

}
