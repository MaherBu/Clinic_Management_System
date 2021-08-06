import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-reports-home',
  templateUrl: './reports-home.component.html',
  styleUrls: ['./reports-home.component.css']
})
export class ReportsHomeComponent implements OnInit {
  public patiensShow = false;
  public surgeriesShow = false;
  public doctorsShow = false;
  public clinicsShow = false;
  public visitsShow = false;
  public covid19Show = false;

  constructor(public sanitizer: DomSanitizer) { 
  }
  ngOnInit(): void {
  }
}
