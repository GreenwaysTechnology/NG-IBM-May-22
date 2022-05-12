import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  public getNumbers(): Observable<number> {
    // return new Observable(subscriber => {
    //   subscriber.next(1)
    //   subscriber.next(2)
    //   subscriber.next(3)
    //   subscriber.next(4)
    //   subscriber.next(5)
    //   subscriber.complete()
    // })
    return of(1, 2, 3, 4, 5)
  }
}
