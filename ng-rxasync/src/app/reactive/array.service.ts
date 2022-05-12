import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {

  constructor() { }

  public getNumberList(): Observable<number> {
    let list = [1, 2, 3, 4, 5, 6];
    return from(list) // returning element from the array
  }
  public getNumbers(): Observable<number[]> {
    let list = [1, 2, 3, 4, 5, 6];
    return of(list) // returning element from the array
  }
}
