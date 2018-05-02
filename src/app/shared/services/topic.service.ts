import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-url';
import { Observable } from 'rxjs';

@Injectable()
export class TopicService {
  constructor(private http: HttpClient) { }
  getTopic(){
    return this.http.get(`${API_URL}/showListTopic`)
  }
  getTopicById(id){
    return this.http.get(`${API_URL}/showListTopic/${id}`)
  }
  setTopic(params, status) {
    return this.http.post(`${API_URL}/topic/${status}`, params)
  }
  setStatusTopic(id) {
    // return this.http.post(`${API_URL}/department/delete/${id}`)
    return this.http.delete(`${API_URL}/topic/delete/${id}`)
  }

}