
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable,of } from 'rxjs';
import { LoadCountries } from 'src/app/store/actions/countries.actions';
import { CountriesState } from 'src/app/store/reducers/countries.reducers';
import { selectAllCountries, selectCountriesError } from 'src/app/store/selectors/countries.selectors';

@Component({
  selector: 'app-flag-list',
  templateUrl: './flag-list.component.html',
  styleUrls: ['./flag-list.component.scss']
})
export class FlagListComponent implements OnInit {

  countryList$: Observable<CountriesState>;
  //errorMessage$:  Observable<string>;

  constructor( private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(LoadCountries());
    this.countryList$ = this.store.select((selectAllCountries));
   // this.errorMessage$ = this.store.select((selectCountriesError));
  }

}
