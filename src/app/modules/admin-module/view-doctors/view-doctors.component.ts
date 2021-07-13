import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Doctors } from 'src/app/models/doctors';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.css']
})
export class ViewDoctorsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'doctorName', 'doctorSpeciality', 'doctorUserName','doctorPassword','clinic',];
  dataSource:any;

  constructor(private ds: DataService) { }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.ds.getAllDoctors().subscribe(
      (x: Doctors[]) => {
        this.dataSource = new MatTableDataSource(x);
        this.dataSource.paginator = this.paginator;
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
