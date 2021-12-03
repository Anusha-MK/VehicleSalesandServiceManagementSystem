import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private baseUrl = 'http://localhost:2031/api/orders';

  constructor(private http: HttpClient) { }

  getOrder(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createOrder(order:Order): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, order);
  }

  getOrdersList(): Observable<any> {
    return this.http.get<Order[]>(`${this.baseUrl}`);
  }
}
