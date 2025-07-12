import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    console.log("Getting users!")
    return this.http.get(`${this.baseUrl}/users`);
  }

  getOrders(): Observable<any> {
    console.log("Getting Orders!")
    return this.http.get(`${this.baseUrl}/orders`);
  }
}