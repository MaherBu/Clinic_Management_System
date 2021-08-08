import { Visit } from './../models/visit';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clinic } from '../models/clinics';
import { Diseases } from '../models/diseases';
import { Doctors } from '../models/doctors';
import { Patient } from '../models/patient-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //   _storeId: number;
  //   public get storeId() {
  //     return this._storeId;
  //   }


  reqHeaders = {
    headers: new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };
  // httpHeader = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'X-Requested-With': 'XMLHttpRequest',
  //     'MyClientCert': '',        // This is empty
  //     'MyToken': ''              // This is empty

  //   }), responseType: 'text' as 'json'
  // };

  // reqHeaders = new HttpHeaders().set('Content-Type','application/json');
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient
  ) { }

  getAllPatients(clinicId:String): Observable<any> {
    return this.http
      .get('http://www.clinicapi.somee.com/api/Clinics/ClinicPatients/?ClinicId=' + clinicId);
  }
  getPatientVisits(patientId:String): Observable<any> {
    return this.http
      .get('http://www.clinicapi.somee.com/api/Visits/PatientVisit/?PatientId=' + patientId);
  }
  getAllDoctors(): Observable<any> {
    return this.http
      .get('http://clinicapi.somee.com/api/doctors');
  }
  getAllClinics(): Observable<any> {
    return this.http
      .get('http://clinicapi.somee.com/api/Clinics');
  }
  getClinicCounts(): any {
    return this.http
      .get('http://clinicapi.somee.com/api/Clinics/count').toPromise();
  }
  getDiseaseCounts(): any {
    return this.http
      .get('http://clinicapi.somee.com/api/Diseases/count').toPromise();
  }
  getPatientCounts(): any {
    return this.http
      .get('http://clinicapi.somee.com/api/Patients/count').toPromise();
  }
  getAllDisease(): any {
    return this.http
      .get('http://clinicapi.somee.com/api/Diseases');
  }
  getDoctorsDropDownMenu(): Observable<any> {
    return this.http
      .get('http://www.clinicapi.somee.com/api/doctors/doctorlists');
  }
  getDiseasesDropDownMenu(): Observable<any> {
    return this.http
      .get('http://www.clinicapi.somee.com/api/Diseases/DiseaseLists');
  }
  getClinicsDropDownMenu(): Observable<any> {
    return this.http
      .get('http://www.clinicapi.somee.com/api/Clinics/ClinicLists');
  }
  getSurgeriesDropDownMenu(): Observable<any> {
    return this.http
      .get('http://www.clinicapi.somee.com/api/Surgeries/SurgeryLists');
  }
  addClinic(clinic: Clinic): any {
    return this.http.post(
      "http://www.clinicapi.somee.com/api/Clinics",
      clinic,
      { responseType: "json" }
    ).toPromise();
  }
  addPatients(patient: Patient): any {
    return this.http.post('http://www.clinicapi.somee.com/api/patients',
      patient,
      { responseType: "json" }
    ).toPromise();
  }
  addDisease(disease: Diseases): any {
    return this.http.post('http://www.clinicapi.somee.com/api/Diseases',
      disease,
      { responseType: "json" }
    ).toPromise();
  }
  addDoctor(doctor: Doctors): any {
    return this.http.post('http://www.clinicapi.somee.com/api/doctors',
      doctor,
      { responseType: "json" }
    ).toPromise();
  }
  addVisit(visit: Visit): any {
    return this.http.post('http://www.clinicapi.somee.com/api/Visits',
        visit,
      { responseType: "json" }
    ).toPromise();
  }
  loginAdmin(username:String,password:String): any {
    return this.http.post('http://www.clinicapi.somee.com/api/Admins/Login',
      {
        "username":username,
        "password":password
      },
      { responseType: "json" }
    ).toPromise();
  }
  loginDoctor(username:String,password:String): any {
    return this.http.post('http://www.clinicapi.somee.com/api/Clinics/Login',
      {
        "username":username,
        "password":password
      },
      { responseType: "json" }
    ).toPromise();
  }
  //   getTraders(): Observable<any> {
  //     return this.http
  //       .get('http://localhost:3000/traders');
  //   }
  //   getStores(): Observable<any> {
  //     if (this._storeId) {
  //       return this.http
  //         .get('http://localhost:3000/stores/' + this._storeId);
  //     } else {
  //       return EMPTY;
  //     }
  //   }
  //   getProductByStoreId(storeId: number): Observable<any> {
  //     if (storeId) {
  //       return this.http
  //         .get('http://localhost:3000/products/' + storeId);
  //     } else {
  //       return EMPTY;
  //     }
  //   }

  //   PostStore(store: StoreItem): Observable<any> {
  //     return this.http
  //       .post(
  //         'http://localhost:3000/stores',
  //         store
  //       );
  //   }
  //   PostProduct(product: ProductItem): Observable<any> {
  //     return this.http
  //       .post(
  //         'http://localhost:3000/products',
  //         product
  //       );
  //   }

  //   PostProductItem(product: ProductItem): Observable<any> {
  //     return this.http
  //       .post(
  //         'http://localhost:3000/traders',
  //         product
  //       );
  //   }

  //   PostNewTrader(trader: Trader): Observable<any> {
  //     return this.http
  //       .post(
  //         'http://localhost:3000/traders',
  //         trader
  //       );
  //   }

  //   TraderLogin(trader: Trader): Observable<any> {
  //     return this.http.post(
  //       'http://localhost:3000/traders/login',
  //       trader
  //     );
  //   }


  //   updateStore(sotre: StoreItem): Observable<any> {
  //     return this.http.put(
  //       'http://localhost:3000/stores',
  //       sotre
  //     );
  //   }
}
