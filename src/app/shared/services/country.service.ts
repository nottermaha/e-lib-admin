import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-url';
import { Observable } from 'rxjs';

@Injectable()
export class CountryService {
  constructor(private http: HttpClient) { }
  getCountry(){
    return this.http.get(`${API_URL}/showListCountry`)
  }



}