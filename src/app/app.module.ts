import { MoudlesModule } from './modules/moudles.module';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoudlesModule
  ],
  exports: [
  ],
  providers: [
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    },
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
