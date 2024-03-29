import { MoudlesModule } from './modules/moudles.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MoudlesModule,
    HttpClientModule
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
