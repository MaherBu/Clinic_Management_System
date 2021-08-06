import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clinic } from 'src/app/models/clinics';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-add-clinic-dialog',
  templateUrl: './add-clinic-dialog.component.html',
  styleUrls: ['./add-clinic-dialog.component.css']
})
export class AddClinicDialogComponent implements OnInit {
  stringifiedData: any;
  value: String;
  data = new Clinic();

  constructor(private ds: DataService,
    private dialogRef: MatDialogRef<AddClinicDialogComponent>,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  addClinic(): void {
    this.ds.addClinic(this.data)
    .then(
      (x)=> {
        console.log(x);
        this.dialogRef.close();
      }
    )
    .catch(
      (x)=>{
        console.log(x);
      }
    )
  }
}
