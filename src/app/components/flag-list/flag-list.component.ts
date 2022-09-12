import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable,of } from 'rxjs';
import { tap} from 'rxjs/operators';
import { ICountry } from 'src/app/models/country';
import { DataService } from 'src/app/services/data.service';
import { LoadingService } from 'src/app/services/loading.service';
import { IAppState } from 'src/app/store';
import { LoadCountries, LoadCountriesSuccess } from 'src/app/store/actions/countries.actions';
import { selectAllCountries, selectCountriesLoaded } from 'src/app/store/selectors/countries.selectors';
//import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-flag-list',
  templateUrl: './flag-list.component.html',
  styleUrls: ['./flag-list.component.scss']
})
export class FlagListComponent implements OnInit {

  countryList$: Observable<any>= this.store.select(selectAllCountries);
  errorMessage:string | undefined;

  constructor( private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.errorMessage = "";
    this.store.dispatch(LoadCountries());
  }

}
