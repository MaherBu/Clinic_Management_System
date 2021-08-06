import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Doctors } from 'src/app/models/doctors';
import { DataService } from 'src/app/services/data-service';
import { AddDoctorComponent } from '../add-doctor-dialog/add-doctor.component';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.css']
})
export class ViewDoctorsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'doctorName', 'doctorSpeciality', 'doctorUserName','doctorPassword','clinic',];
  dataSource:any;
  isLoading = true;

  constructor(private ds: DataService,private dialog: MatDialog) { }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.isLoading = true;
    this.ds.getAllDoctors().subscribe(
      (x: Doctors[]) => {
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
    const editDialogRef = this.dialog.open(AddDoctorComponent);
  }
}
