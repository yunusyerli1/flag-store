import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('toggleDark') toggleDark!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  toggleDarkMode() {
    console.log("sd")
    this.renderer.addClass(this.toggleDark.nativeElement.querySelector('.toggle-dark'), 'dark' );
  }

}
