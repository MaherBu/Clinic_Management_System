import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
  }


  login(){
    var user = ((document.getElementById("username") as HTMLInputElement).value);
    var pass = ((document.getElementById("password") as HTMLInputElement).value);

    if(user == "admin" && pass == "admin"){
      this.router.navigate(['/admin']);
    }
    else if(user == "re" && pass == "re"){
      this.router.navigate(['/reports']);
    }
    else{
      this.router.navigate(['/clinic']);
    }
  }

}
