import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable,of } from 'rxjs';
import { tap} from 'rxjs/operators';
import { ICountry } from 'src/app/models/country';
import { DataService } from 'src/app/services/data.service';
import { LoadingService } from 'src/app/services/loading.service';
import { loadCountries } from 'src/app/store/actions/countries.actions';
//import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-flag-list',
  templateUrl: './flag-list.component.html',
  styleUrls: ['./flag-list.component.scss']
})
export class FlagListComponent implements OnInit {

  countryList$!: Observable<any>;
  errorMessage:string | undefined;

  constructor(private dataService : DataService,
    private loadingService: LoadingService,
    private store: Store<ICountry[]>
    ) { }

  ngOnInit(): void {
    this.getCountryList()
  }

   getCountryList() {
    this.errorMessage = "";
    this.loadingService.loadingOn();
     this.dataService.getCountries()
     .pipe(
      tap(countries => {
        console.log("Dispatch öncesi", countries);
        this.store.dispatch(loadCountries({countries}));
      })
     )
     .subscribe(
            (response) => {
             this.countryList$ = of(response);
             this.loadingService.loadingOff();
           },
           (err)=>{this.errorMessage = err;}

         )

  }

}
