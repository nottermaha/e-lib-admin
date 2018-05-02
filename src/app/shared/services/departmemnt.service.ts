import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-url';
import { Observable } from 'rxjs';

@Injectable()
export class DepartmentService {
  constructor(private http: HttpClient) { }
  getDepartment(){
    return this.http.get(`${API_URL}/showListDepartment`)
  }
  getDepartmentById(id){
    return this.http.get(`${API_URL}/showListDepartment/${id}`)
  }
  setDepartment(params, status) {
    return this.http.post(`${API_URL}/department/${status}`, params);
  }

}