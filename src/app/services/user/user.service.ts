import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:2031/api/users';
  private url = 'http://localhost:2031/api/usercheck';

  constructor(private http: HttpClient) { }

  getUser(mailid: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${mailid}`);
  }

  createUser(user:User): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  checkUser(user:User): Observable<Object> {
    return this.http.post(`${this.url}`, user);
  }

  getCustomersList(): Observable<any> {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }
  
}
