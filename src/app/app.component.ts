import { Component, ElementRef, OnInit, AfterViewInit, Renderer2, ViewChild } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[LoadingService]
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'flag-store';
  @ViewChild('root') root!: ElementRef;
  isDarkMode:boolean = false;
  localDarkMode!:boolean;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.localDarkMode = localStorage.getItem('isDarkMode') == 'false' ? false : true;
  }

  ngAfterViewInit() {
    if(this.localDarkMode){
      this.isDarkMode = this.localDarkMode;
      this.switchTheme()
    } else this.switchTheme()
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('isDarkMode', this.isDarkMode.toString())
    this.switchTheme();
  }

  switchTheme() {
    if(this.isDarkMode) {
      this.renderer.removeClass(this.root.nativeElement, 'light')
      this.renderer.addClass(this.root.nativeElement, 'dark')
    }
    else {
      this.renderer.removeClass(this.root.nativeElement, 'dark')
      this.renderer.addClass(this.root.nativeElement, 'light')
    }
  }
}
