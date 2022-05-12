import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TODOS } from '../mock-data/todos.mock'

@Injectable({
  providedIn: 'root'
})
export class DataProcessingStreamService {

  constructor() { }

  public getValue(): Observable<number> {
    //process the data: double the numbers
    return of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
      map(item => item * 2)
    );
  }
  public findEvenNumbers(): Observable<number> {
    //process the data: double the numbers
    return of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
      filter(item => item % 2 === 0) // return values based on tr
    );
  }
  public findEvenNumbersFromArray(): Observable<number> {
    //process the data: double the numbers
    return from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe(
      filter(item => item % 2 === 0) // return values based on tr
    );
  }
  public findAllCompletedTodos(): Observable<any> {
    return from(TODOS).pipe(
      filter(todo => todo.completed)
    )
  }

}
