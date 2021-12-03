import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:2031/api/customers';
  private baseUrl1 = 'http://localhost:2031/api/customer';

  constructor(private http: HttpClient) { }

  getCustomer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getCus(customer: Customer): Observable<any> {
    return this.http.post(`${this.baseUrl1}/`,customer);
  }

  createCustomer(customer: Customer): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, customer);
  }

  getCustomersList(): Observable<any> {
    return this.http.get<Customer[]>(`${this.baseUrl}`);
  }

  updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl1}/${id}`, value);
  }

}

