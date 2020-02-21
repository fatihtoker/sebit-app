import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private http: HttpClient) { }

  private usersUrl = 'users'; 
  private baseUrl = 'https://jsonplaceholder.typicode.com/'; 

  getInstructors(): Observable<any> {
    return this.http.get(this.baseUrl + this.usersUrl)
  }
}
