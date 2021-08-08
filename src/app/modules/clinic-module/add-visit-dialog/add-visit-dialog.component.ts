import { Visit } from './../../../models/visit';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    @Inject(MAT_DIALOG_DATA) public data: Visit,
    private ds: DataService,
    private _snackBar: MatSnackBar
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
    this.data = {
      PatientId: this.data.PatientId,
      ClinicId : this.data.ClinicId,
      DrId: this.doctors$,
      DiseaseId : this.diseases$,
      ClinicName: '',
      DiseaseName: '',
      DrName: '',
      Length: 0,
      Note: '',
      Price: 0,
      PatientFullName: '',
      Scheduled: false,
      Smoking: true,
      VisitDate: '',
      Wieght: 0
    }
  }

  addVisit(){
    
    this.ds.addVisit(this.data)
    .then(
      (x)=> {
        console.log(x);
        this.dialogRef.close();
        this._snackBar.open("Patient Visit Added Successfully");
      }
    )
    .catch(
      (x)=>{
        console.log(x);
        this.dialogRef.close();
      }
    )  
  }
}
