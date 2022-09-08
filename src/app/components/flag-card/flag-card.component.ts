import { Component, Input, OnInit } from '@angular/core';
import { ICountry } from 'src/app/models/country';

@Component({
  selector: 'app-flag-card',
  templateUrl: './flag-card.component.html',
  styleUrls: ['./flag-card.component.scss']
})
export class FlagCardComponent implements OnInit {

  @Input() countryInfo!: ICountry;

  constructor() { }

  ngOnInit(): void {
  }

}
