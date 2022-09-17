import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @Output() switchDarkMode = new EventEmitter<any>();

  isDarkMode:boolean = false;
  localDarkMode!:boolean;

  constructor() { }

  ngOnInit(): void {
    this.localDarkMode = localStorage.getItem('isDarkMode') == 'false' ? false : true;
  }

  ngAfterViewInit() {
    if(this.localDarkMode) this.isDarkMode = this.localDarkMode;
  }

  toggleDarkMode() {
    this.isDarkMode=!this.isDarkMode;
    this.switchDarkMode.emit();
  }

}
