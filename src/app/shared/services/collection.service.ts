import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-url';
import { Observable } from 'rxjs';

@Injectable()
export class CollectionService {
  constructor(private http: HttpClient) { }
  getCollection(){
    return this.http.get(`${API_URL}/showListCollection`)
  }
  getCollectionById(id){
    return this.http.get(`${API_URL}/showListCollection/${id}`)
  }
  setCollection(params, status) {
    return this.http.post(`${API_URL}/collection/${status}`, params)
  }
  setStatusCollection(id) {
    // return this.http.post(`${API_URL}/department/delete/${id}`)
    return this.http.delete(`${API_URL}/collection/delete/${id}`)
  }

}