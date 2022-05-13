import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  url = 'http://localhost:3000/heroes'

  constructor(private http: HttpClient) { }

  //biz methods to interact with backend
  //GET  ALL todos
  public findAll(): Observable<any[]> {
    return this.http.get<any[]>(this.url)
  }
  getHero(id: number): Observable<any> {
    return this.http.get<any[]>(`${this.url}/${id}`)
  }
}
