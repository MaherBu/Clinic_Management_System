import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Patient } from 'src/app/models/patient-model';
import { DataService } from 'src/app/services/data-service';
import { AddVisitDialogComponent } from '../add-visit-dialog/add-visit-dialog.component';

@Component({
  selector: 'app-add-surgery-visit-dialog',
  templateUrl: './add-surgery-visit-dialog.component.html',
  styleUrls: ['./add-surgery-visit-dialog.component.css']
})
export class AddSurgeryVisitDialogComponent implements OnInit {
  doctors$;
  clinics$;
  diseases$;
  surgeryType$;

  constructor(
    private dialogRef: MatDialogRef<AddSurgeryVisitDialogComponent>,
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
  getSurgeries(): any {
    return this.ds.getSurgeriesDropDownMenu();
  }

  ngOnInit(): void {
    this.doctors$ = this.getDoctors();
    this.clinics$ = this.getClinics();
    this.diseases$ = this.getDisease();
    this.surgeryType$ = this.getSurgeries();

  }

  addSurgery(){
    this.dialogRef.close();
  }

}
