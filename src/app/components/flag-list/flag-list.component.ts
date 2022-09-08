import { Component, OnInit } from '@angular/core';
import { Observable,of } from 'rxjs';
import { map, tap,} from 'rxjs/operators';
import { ICountry } from 'src/app/models/country';
import { DataService } from 'src/app/services/data.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-flag-list',
  templateUrl: './flag-list.component.html',
  styleUrls: ['./flag-list.component.scss']
})
export class FlagListComponent implements OnInit {

  countryList$!: Observable<any>;
  errorMessage:string | undefined;
  loading:boolean = false;

  constructor(private dataService : DataService,
    private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.getCountryList()
  }

   getCountryList() {
    this.loading = true;
    this.errorMessage = "";
    this.loadingService.loadingOn();
     this.dataService.getCountries()
     .subscribe({
           next: (response) => {
             this.countryList$ = of(response);
           },
           error: (error) => {
             console.error('Request failed with error')
             this.errorMessage = error;
             this.loading = false;
           },
           complete: () => {
             this.loading = false;
             this.loadingService.loadingOff();
           }
         })

  }

}
