import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //get Users
  public findAll(): Observable<any[]> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<any[]>(url)
  }
}
