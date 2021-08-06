import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Patient } from 'src/app/models/patient-model';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-add-visit-dialog',
  templateUrl: './add-visit-dialog.component.html',
  styleUrls: ['./add-visit-dialog.component.css']
})
export class AddVisitDialogComponent implements OnInit {
  doctors$;
  clinics$;
  diseases$;
  scope$;
  item: boolean;

  constructor(
    private dialogRef: MatDialogRef<AddVisitDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Patient,
    private ds: DataService
  ) { }

  getDoctors(): any {
    return this.ds.getDoctorsDropDownMenu();
  }
  getClinics(): any {
    return this.ds.getClinicsDropDownMenu();
  }
  getDisease(): any {
    return this.ds.getDiseasesDropDownMenu();
  }

  ngOnInit(): void {
    this.doctors$ = this.getDoctors();
    this.clinics$ = this.getClinics();
    this.diseases$ = this.getDisease();
  }

  addVisit(){
    this.ds.addVisit(this.data)
    .then(
      (x)=> {
        console.log(x);
      }
    )
    .catch(
      (x)=>{
        console.log(x);
      }
    )  
  }
}
