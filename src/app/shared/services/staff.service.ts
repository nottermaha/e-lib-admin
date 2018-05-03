import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-url';
import { Observable } from 'rxjs';

@Injectable()
export class StaffService {
  constructor(private http: HttpClient) { }
  getStaff(){
    return this.http.get(`${API_URL}/showListStaff`)
  }
  getStaffById(id){
    return this.http.get(`${API_URL}/showListStaff/${id}`)
  }
  setStaff(params, status) {
    return this.http.post(`${API_URL}/staff/${status}`, params)
  }
  setStatusStaff(id) {
    return this.http.delete(`${API_URL}/staff/delete/${id}`)
  }

}