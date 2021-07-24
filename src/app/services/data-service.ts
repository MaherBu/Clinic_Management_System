import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Patient } from '../models/patient-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //   _storeId: number;
  //   public get storeId() {
  //     return this._storeId;
  //   }


  // httpHeader = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Accept' : 'application/json'})
  // };
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'MyClientCert': '',        // This is empty
      'MyToken': ''              // This is empty

    }), responseType: 'text' as 'json'
  };

  constructor(
    private http: HttpClient
  ) { }

  getAllPatients(): Observable<any> {
    return this.http
      .get('http://clinicapi.somee.com/api/Patients');
  }

  getAllDoctors(): Observable<any> {
    return this.http
      .get('http://clinicapi.somee.com/api/doctors');
  }
  addPatient(patient: Patient): Observable<any> {
    return this.http
      .post<Patient>(
        'http://clinicapi.somee.com/api/Patients',
        patient,
        {responseType: 'json'},
      ).pipe((e) => e);
  }
  addPatients(patient: Patient): any {
    return this.http.post<Patient>('http://clinicapi.somee.com/api/patients', patient, this.httpHeader);
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
