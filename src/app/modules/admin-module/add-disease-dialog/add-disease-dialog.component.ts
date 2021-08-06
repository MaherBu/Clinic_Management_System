import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Diseases } from 'src/app/models/diseases';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-add-disease-dialog',
  templateUrl: './add-disease-dialog.component.html',
  styleUrls: ['./add-disease-dialog.component.css']
})
export class AddDiseaseDialogComponent implements OnInit {
  data = new Diseases();
  constructor(
    private dialogRef: MatDialogRef<AddDiseaseDialogComponent>,
    private ds: DataService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addDisease(){
    this.ds.addDisease(this.data)
    .then(
      (x)=> {
        console.log(x);
        this.dialogRef.close();
      }
    )
    .catch(
      (x)=>{
        console.log(x);
      }
    )
  }

}
