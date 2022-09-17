import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {

  isVisible:boolean = false;
  @Input() regions: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {}

  toggleMenu(){
    this.isVisible = !this.isVisible;
  }

  selectMenuItem(region) {
    this.dataService.filterRegion(region);
  }

}
