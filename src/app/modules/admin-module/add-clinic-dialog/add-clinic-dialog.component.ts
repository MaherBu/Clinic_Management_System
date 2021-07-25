import { Component, OnInit } from '@angular/core';
import { Clinic } from 'src/app/models/clinics';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-add-clinic-dialog',
  templateUrl: './add-clinic-dialog.component.html',
  styleUrls: ['./add-clinic-dialog.component.css']
})
export class AddClinicDialogComponent implements OnInit {
  stringifiedData: any;

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    
  }
  addClinic(data: Clinic): void {
    this.stringifiedData = JSON.stringify({data});  
    this.ds.addClinic(this.stringifiedData).subscribe(
      (x) => this.stringifiedData
      );
    }
}
