import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicebill } from './servicebill';

@Injectable({
  providedIn: 'root'
})
export class ServicebillService {
  private baseUrl = 'http://localhost:2031/api/sbills';

  constructor(private http: HttpClient) { }

  getSbill(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSbill(sbill: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, sbill);
  }

  getSbillList(): Observable<any> {
    return this.http.get<Servicebill[]>(`${this.baseUrl}`);
  }
}
