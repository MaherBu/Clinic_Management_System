import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clinic } from '../models/clinics';
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
      'Accept' : 'application/json',
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

  getAllPatients(): Observable<any> {
    return this.http
      .get('http://www.clinicapi.somee.com/api/Patients');
  }

  getAllDoctors(): Observable<any> {
    return this.http
      .get('http://clinicapi.somee.com/api/doctors');
  }
  getAllClinics(): Observable<any> {
    return this.http
      .get('http://clinicapi.somee.com/api/Clinics');
  }
  getAllDisease(): Observable<any> {
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
  PostClinic(clinic: Clinic): Observable<any> {
    const formData = new FormData();
    // formData.append('userName', clinic.userName);
    return this.http
      .post(
        'http://www.clinicapi.somee.com/api/Clinics',
        clinic,
        // JSON.stringify(clinic),
        this.reqHeaders
        // {responseType: 'json'}
      );
  }
  // PostTestClinic(value: String): Observable<any> {
  //   return this.http
  //     .post(
  //       'https://localhost:44337/api/values',
  //       value,
  //       this.reqHeaders
  //       // {responseType: 'json'}
  //     );
  // }
  addClinic(clinic: Clinic): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      // 'Accept': 'application/json'      
    });
    return this.http.post(
      "http://www.clinicapi.somee.com/api/Clinics",
      clinic,
      // {headers:this.reqHeaders}
      {headers: headers}
    ).pipe((e) => e);
  }
  addPatient(patient: Patient): Observable<any> {
    return this.http
      .post<Patient>(
        'http://clinicapi.somee.com/api/Patients',
        patient,
        {
          headers:
            new HttpHeaders(
              {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'MyClientCert': '',        
                'MyToken': ''              
              }
            )
        },
      ).pipe((e) => e);
  }
  addPatients(patient: Patient): any {
    return this.http.post('http://clinicapi.somee.com/api/Patients',
      patient,
      this.reqHeaders
    ).toPromise().then((data: any) => {
        console.log(data)
    });
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
