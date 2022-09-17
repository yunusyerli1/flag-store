import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  term: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {}

  searchTerm() {
    this.dataService.setSearchTerm(this.term)
  }

}
