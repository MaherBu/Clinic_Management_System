import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Clinic } from 'src/app/models/clinics';
import { DataService } from 'src/app/services/data-service';
import { AddClinicDialogComponent } from '../add-clinic-dialog/add-clinic-dialog.component';

@Component({
  selector: 'app-medical-centers',
  templateUrl: './medical-centers.component.html',
  styleUrls: ['./medical-centers.component.css']
})
export class MedicalCentersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'password','region','clinicOpeningDate','clinicClosingDate'];
  dataSource:any;
  isLoading = true;

  constructor(private ds: DataService,private dialog: MatDialog) { }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.isLoading = true;
    this.ds.getAllClinics().subscribe(
      (x: Clinic[]) => {
        this.isLoading = false;
        this.dataSource = new MatTableDataSource(x);
        this.dataSource.paginator = this.paginator;
      }, error => this.isLoading = false);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog(event): void {
    event.stopPropagation();
    const editDialogRef = this.dialog.open(AddClinicDialogComponent);
  }
}
