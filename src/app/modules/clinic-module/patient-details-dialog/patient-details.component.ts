import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/models/patient-model';
import { DataService } from 'src/app/services/data-service';
import { AddSurgeryVisitDialogComponent } from '../add-surgery-visit-dialog/add-surgery-visit-dialog.component';
import { AddVisitDialogComponent } from '../add-visit-dialog/add-visit-dialog.component';
import { PatientVisitDialogComponent } from '../patient-visit-dialog/patient-visit-dialog.component';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  public selectedUserId : string;
  item : Patient;

  constructor(
    private dialogRef: MatDialogRef<PatientDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Patient,
    private ds: DataService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // this._activatedRoute.params.subscribe(params => {
    //   this.selectedUserId = params.id;
    // })
  }
  openDialogNormalVisit(data, event): void {
    this.dialogRef.close();
    event.stopPropagation();
    const editDialogRef = this.dialog.open(AddVisitDialogComponent, {
      data: data
    });
  }
  openDialogSurgeryVisit(data, event): void {
    this.dialogRef.close();
    event.stopPropagation();
    const editDialogRef = this.dialog.open(AddSurgeryVisitDialogComponent, {
      data: data
    });
  }
  
  openDialogPatientVisit(data, event): void {
    this.dialogRef.close();
    event.stopPropagation();
    const editDialogRef = this.dialog.open(PatientVisitDialogComponent, {
      data: data
    });
  }
}
