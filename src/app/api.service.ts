import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addUser=(data:any)=>{
    return this.http.post('http://localhost:8080/userRegistration',data)
  } 
  searchUserId=(data:any)=>{
    return this.http.post('http://localhost:8080/userLogin',data)
  }
  getUserData=(data:any)=>{
    return this.http.post('http://localhost:8080/viewProfile',data)
  }
  addComplaint=(data:any)=>{
    return this.http.post('http://localhost:8080/addComplaint',data)

    
  }
}
