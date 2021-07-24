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

  constructor(
    private dialogRef: MatDialogRef<AddVisitDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Patient,
    private ds: DataService
  ) { }

  ngOnInit(): void {
  }

}
