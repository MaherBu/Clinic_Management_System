import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private ds: DataService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }


  login() {
    this.ds.loginDoctor(this.username, this.password)
      .then(
        (x) => {
          if (x != 0) {
            this.router.navigate(['/clinic']);
            localStorage.setItem("clinicId", x.toString());
            console.log(x);
          } else {
            this._snackBar.open("Error Username or Password", "Re Enter");
          }
        }
      ).catch(
        (x) => {
          console.log(x);
        }
      )
    // else{
    //   this.router.navigate(['/clinic']);
    // }
  }

}
