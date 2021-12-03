import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Regvehicle } from './regvehicle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegvehiclesService {

  private baseUrl = 'http://localhost:2031/api/regvehicles';
  private baseUrl1 = 'http://localhost:2031/api/regvehicle';

  constructor(private http: HttpClient) { }

  RegisterVehicle(regvehicle: Regvehicle): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, regvehicle);
  }

  getVehicle(): Observable<any> {
    return this.http.get<Regvehicle[]>(`${this.baseUrl1}`);
  }
}
