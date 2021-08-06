import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient-model';
import { DataService } from 'src/app/services/data-service';
import { PatientDetailsComponent } from '../patient-details-dialog/patient-details.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'fullName', 'birth', 'phoneNum','identityNum','notes'];
  dataSource: any;
  isLoading = true;
  clinicId:String;

  constructor(private ds: DataService, private router: Router, private dialog: MatDialog) { }
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.isLoading = true;
    this.clinicId = localStorage.getItem("clinicId");
    this.ds.getAllPatients(this.clinicId).subscribe(
      (x: Patient[]) => {
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
    const editDialogRef = this.dialog.open(PatientDetailsComponent, {
      data: data
    });
  }
}


// export interface PeriodicElement {
//   firstName: string;
//   lastName: String;
//   fullName: String;
//   age: number;
//   gender: String;
//   place: String;
//   lastVisit: String;
//   position: number;
//   // weight: number;
//   // symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
//   {position: 2, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
//   {position: 3, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
//   {position: 4, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
//   {position: 5, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
//   {position: 6, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
//   {position: 7, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
//   {position: 8, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
//   {position: 9, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
//   {position: 10, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
//   {position: 11, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
//   {position: 12, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
//   {position: 13, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
//   {position: 14, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
//   {position: 15, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
//   {position: 16, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
//   {position: 17, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
//   {position: 18, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
//   {position: 19, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
//   {position: 20, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
// ];




