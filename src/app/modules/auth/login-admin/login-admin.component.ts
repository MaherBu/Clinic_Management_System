import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  username: String;
  password: String;
  constructor(
    public route: ActivatedRoute,
     private router: Router,
     private ds: DataService,
     private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
  }
  login(){
    if(this.username == "re" && this.password== "re")
      this.router.navigate(['/reports']);

    this.ds.loginAdmin(this.username, this.password)
    .then(
      (x) => {
        if (x != 0) {
          this.router.navigate(['/admin']);
          localStorage.setItem("adminId",x.toString());
          console.log(x);
        }
        else{
          this._snackBar.open("Error Username or Password", "Re Enter");
        }
      }
    ).catch(
      (x) => {
        console.log(x);
      }
    )
  }

}
