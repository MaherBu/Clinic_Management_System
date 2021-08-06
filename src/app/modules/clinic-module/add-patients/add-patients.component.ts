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
  selectedGender: string = 'Male';
  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.data = {
      Gender: this.selectedGender,
      PatientFullName: '',
      PatientBirhdate: '',
      PatientPhoneNumber: '',
      IdentityNumber:'',
      Note:''
    }
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedGender = event.target.value;
    // this.data.gender = this.selectedGender;
  }
  addPatient() {
    this.ds.addPatients(this.data)
    .then(
      (x)=> {
        console.log(x);
      }
    )
    .catch(
      (x)=>{
        console.log(x);
      }
    )
  }
}
