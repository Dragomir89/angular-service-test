import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { Home } from './components/home-component/home.component';
import { HomeServise } from './components/home-component/home.service';

import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    Home
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    // HttpModule
  ],
  providers: [ HomeServise],
  bootstrap: [AppComponent]
})
export class AppModule { }
