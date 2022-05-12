import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor() { }
  //handling error inside subscribe method
  public handleError__(): Observable<number> {
    return of(1, 2, 3, 4, 5).pipe(
      map(n => {
        if (n === 4) {
          throw 'four!'; //simulating error
        }
        return n;
      })
    )
  }
  public handleError(): Observable<number> {
    return of(1, 2, 3, 4, 5).pipe(
      map(n => {
        if (n === 4) {
          console.log('hitting');
          throw 'four!'; //simulating error
        }
        return n;
      }),
      retry(3),
      catchError(err => {
        return of(this.fallback());
      })
    )
  }
  private fallback() {
    return 900;
  }
}
