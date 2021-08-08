import { VisitDetailsDialogComponent } from './../visit-details-dialog/visit-details-dialog.component';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Patient } from 'src/app/models/patient-model';
import { Visit } from 'src/app/models/visit';
import { DataService } from 'src/app/services/data-service';
import { AddVisitDialogComponent } from '../add-visit-dialog/add-visit-dialog.component';
import { PatientDetailsComponent } from '../patient-details-dialog/patient-details.component';

@Component({
  selector: 'app-patient-visit-dialog',
  templateUrl: './patient-visit-dialog.component.html',
  styleUrls: ['./patient-visit-dialog.component.css']
})
export class PatientVisitDialogComponent implements OnInit {
  displayedColumns: string[] = ['VisitId', 'PatientFullName','DrName','VisitDate'];
  dataSource: any;
  isLoading = true;

  constructor(
    private dialogRef: MatDialogRef<PatientVisitDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Visit,
    private ds: DataService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    // this.clinicId = localStorage.getItem("clinicId");
    this.ds.getPatientVisits(this.data.PatientId.toString()).subscribe(
      (x: Visit[]) => {
        this.isLoading = false;
        this.dataSource = new MatTableDataSource(x);
        this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      }, error => this.isLoading = false);

  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(data, event): void {
    event.stopPropagation();
    // this.dialogRef.close();
    const editDialogRef = this.dialog.open(VisitDetailsDialogComponent, {
      data: data
    });
  }
}
