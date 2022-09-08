import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { FlagListComponent } from './components/flag-list/flag-list.component';
import { FlagCardComponent } from './components/flag-card/flag-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DetailComponent,
    SearchBarComponent,
    FlagListComponent,
    FlagCardComponent,
    PageNotFoundComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
