import { Component, OnInit } from '@angular/core';
import { ErrorHandlingService } from './error-handling.service';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styles: [
  ]
})
export class ErrorHandlingComponent implements OnInit {

  stream$: Array<number> = []
  constructor(private errorHandler: ErrorHandlingService) { }

  ngOnInit(): void {
    this.errorHandler.handleError().subscribe(data => {
      console.log("Success : ",data)
    }, err => {
      console.log('error :',err)
    }, () => {
      console.log('completed')
    })
  }

}
