import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.css']
})
export class AdminNavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goReport(){
    this.router.navigateByUrl['/reports'];
  }
}
