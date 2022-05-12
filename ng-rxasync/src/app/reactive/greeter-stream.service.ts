import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GreeterStreamService {
  constructor() { }
  //stream data 
  //here this is async with stream api
  public sayHello():Observable<string> {
    return new Observable(subscriber => {
      //pushing data :  emitting events - data,error,complete
      subscriber.next("Hello") // send data
      subscriber.next("Hai") // send data
      subscriber.next("welcome") // send data
      subscriber.next("how are you") // send data
      subscriber.complete()
    })
  }

}
