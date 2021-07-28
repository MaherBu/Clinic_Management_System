import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient-model';
import { DataService } from 'src/app/services/data-service';


@Component({
  selector: 'app-add-patients',
  templateUrl: './add-patients.component.html',
  styleUrls: ['./add-patients.component.css']
})
export class AddPatientsComponent implements OnInit {

  data = new Patient();
  stringifiedData: any;
  parsedJson: any;

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.data = {
      gender: 'Male',
      identityNumber: '',
      patientBirhdate: '',
      patientFullName: '',
      patientPhoneNumber: '',
      note: ''
    }

  }

  addPatient() {
    // this.stringifiedData = JSON.stringify({data});  
    this.ds.addPatients(this.data).toPromise()
    .then(
      (x: Patient) => {
        console.log(x);
        // this.dialogRef.close(x);
      }
    )
    // this.ds.addPatients(this.stringifiedData).subscribe(
    //   (x) => {
    //     console.log(x);
    //   }
    // );
    // console.log(this.data);
    // console.log("With Stringify :" , this.stringifiedData); 
    // this.parsedJson = JSON.parse(this.stringifiedData);  
    // console.log("With Parsed JSON :" , this.parsedJson);
  }
}
