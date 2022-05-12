import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, of } from 'rxjs';
import { Todo } from './todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  //biz methods to interact with backend
  //GET  ALL todos
  public findAllTodos(): Observable<Todo[]> {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Todo[]>(url).pipe(
      retry(3),
      catchError(() => of<Todo[]>([{ userId: 0, id: 0, title: 'foo', completed: false }]))
    )
  }

}
