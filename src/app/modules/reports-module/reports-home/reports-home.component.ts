import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-reports-home',
  templateUrl: './reports-home.component.html',
  styleUrls: ['./reports-home.component.css']
})
export class ReportsHomeComponent implements OnInit {
  public showMe = false;
  gLink: any = 'https://google.com';


  constructor(public sanitizer: DomSanitizer) { 
  }

  ngOnInit(): void {
  }
  getLink(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.gLink);
  }
}
