import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Doctors } from 'src/app/models/doctors';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  data = new Doctors();
  constructor(
    private dialogRef: MatDialogRef<AddDoctorComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: Doctors,
    private ds: DataService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    
  }
  addDoctor(){
    this.ds.addDoctor(this.data)
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
