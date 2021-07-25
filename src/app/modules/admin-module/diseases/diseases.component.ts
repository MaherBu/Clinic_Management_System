import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Diseases } from 'src/app/models/diseases';
import { DataService } from 'src/app/services/data-service';
import { DiseaseDetailsDialogComponent } from '../disease-details-dialog/disease-details-dialog.component';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css']
})
export class DiseasesComponent implements OnInit {
  displayedColumns: string[] = ['diseaseId', 'diseaseName'];
  dataSource: any;
  isLoading = true;

  constructor(private ds: DataService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.ds.getAllDisease().subscribe(
      (x: Diseases[]) => {
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
    const editDialogRef = this.dialog.open(DiseaseDetailsDialogComponent, {
      data: data
    });
  }

}
