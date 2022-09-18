import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menuItems:Array<string>= ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  constructor() { }

  ngOnInit(): void {
  }

}
