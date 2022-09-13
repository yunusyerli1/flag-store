import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DataService } from 'src/app/services/data.service';
import { searchQuery } from 'src/app/store/selectors/countries.selectors';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  term: string;

  constructor(private store: Store, private dataService: DataService) { }

  ngOnInit(): void {
  }

  searchTerm() {
    this.dataService.setSearchTerm(this.term)
  }

}
