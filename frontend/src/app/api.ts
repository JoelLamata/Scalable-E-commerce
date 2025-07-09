import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api {
  constructor(private httpClient: HttpClient) { }

  public getDemoMethod() {
    return this.httpClient.get("/notification/demo/demoMethod");
  }
}
