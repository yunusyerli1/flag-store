import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    countryDetail$!:Observable<any>;
    errorMessage:string | undefined;


  constructor(private route: ActivatedRoute,
              private dataService : DataService,
              private loadingService: LoadingService) {}

  ngOnInit(): void {
    const selectedId = this.route.snapshot.paramMap.get('id') as string;
    this.getCountryDetail(selectedId);
  }

  getCountryDetail(code: string) {
    this.dataService.getDetail(code).subscribe({
      next: (response) => {
        this.countryDetail$ = response;
        console.log(this.countryDetail$)
      },
      error: (error) => {
        console.error('Request failed with error')
        this.errorMessage = error;
      },
      complete: () => {
        this.loadingService.loadingOff();
      }
    });
  }


}
