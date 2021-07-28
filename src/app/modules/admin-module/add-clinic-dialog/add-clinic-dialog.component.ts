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
    // @Inject(MAT_DIALOG_DATA) public data: Clinic
  ) { }

  ngOnInit(): void {
    // const formData = new FormData();
    // formData.append('userName', 'mazeh');
    // formData.append('password', '1122');
    // formData.append('clinicOpeningDate', '01/01/2016');
    // formData.append('clinicClosingDate', '01/01/2017');
    // formData.append('region', 'damas');

    // this.ds.PostClinic();
    
    // this.value = "test";
    // this.ds.PostTestClinic(this.value).subscribe(()=> this.value)
    // this.data = {
    //   // clinicId: 10,
    //   userName: '',
    //   password: '',
    //   clinicClosingDate: '',
    //   clinicOpeningDate: null,
    //   region: ''
    // };
  }

  addClinic(): void {
    // this.stringifiedData = JSON.stringify(this.data);
    this.ds.addClinic(this.data).subscribe(
      testMessage => {
         testMessage = this.data; 
      })
    // this.ds.PostTestClinic(this.da).subscribe(()=> this.data)

    // .then(
    //   (x) => {
    //     this.dialogRef.close(x);
    //   }
    // )
    // 23
  }
  // addClinic(data: Clinic): void {
  //   this.stringifiedData = JSON.stringify(data);  
  //   this.ds.addClinic(this.stringifiedData).toPromise().then(
  //     (x) => {
  //       JSON.stringify(x.json)
  //     }
  //   );
  // }
}
