import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements AfterViewInit {
  
  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'fullName','age','gender','place','lastVisit',];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


export interface PeriodicElement {
  firstName: string;
  lastName: String;
  fullName: String;
  age: number;
  gender: String;
  place: String;
  lastVisit: String;
  position: number;
  // weight: number;
  // symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
  {position: 2, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
  {position: 3, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
  {position: 4, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
  {position: 5, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
  {position: 6, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
  {position: 7, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
  {position: 8, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
  {position: 9, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
  {position: 10, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
  {position: 11, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
  {position: 12, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
  {position: 13, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
  {position: 14, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
  {position: 15, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
  {position: 16, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
  {position: 17, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
  {position: 18, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
  {position: 19, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
  {position: 20, firstName: 'Ahmad', lastName: 'SH',fullName:'Ahmad SH', age: 33, gender: 'Male',place: 'Mazzeh',lastVisit: '10/4/2021'},
];




