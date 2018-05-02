import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-url';
import { Observable } from 'rxjs';

@Injectable()
export class HelpcategoriesService {
  constructor(private http: HttpClient) { }
  getHelpcategories(){
    return this.http.get(`${API_URL}/showListHelpCategories`)
  }
  getHelpcategoriesById(id){
    return this.http.get(`${API_URL}/showListHelpCategories/${id}`)
  }
  setHelpcategories(params, status) {
    return this.http.post(`${API_URL}/helpCategories/${status}`, params)
  }
  setStatusHelpcategories(id) {
    // return this.http.post(`${API_URL}/department/delete/${id}`)
    return this.http.delete(`${API_URL}/helpCategories/delete/${id}`)
  }

}