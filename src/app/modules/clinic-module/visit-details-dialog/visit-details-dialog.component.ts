import { Visit } from './../../../models/visit';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-visit-details-dialog',
  templateUrl: './visit-details-dialog.component.html',
  styleUrls: ['./visit-details-dialog.component.css']
})
export class VisitDetailsDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<VisitDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Visit,
    private ds: DataService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

}
