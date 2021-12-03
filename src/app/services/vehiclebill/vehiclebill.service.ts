import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiclebill } from './vehiclebill';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiclebillService {
  private baseUrl = 'http://localhost:2031/api/vbills';

  constructor(private http: HttpClient) { }

  getVbill(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createVbill(vbill: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`,vbill);
  }

  getVbillList(): Observable<any> {
    return this.http.get<Vehiclebill[]>(`${this.baseUrl}`);
  }
}
