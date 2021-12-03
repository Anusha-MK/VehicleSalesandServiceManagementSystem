import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vservice } from './vservice';

@Injectable({
  providedIn: 'root'
})
export class VservicesService {
  private baseUrl = 'http://localhost:2031/api/services';

  constructor(private http: HttpClient) { }

  getService(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createService(service: Vservice): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, service);
  }

  getServicesList(): Observable<any> {
    return this.http.get<Vservice[]>(`${this.baseUrl}`);
  }
}
