import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
       <h1>Child </h1>
      <input [(ngModel)]="text">
      <button (click)="sendDataToParent()">Send Data To parent</button>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  //Used to send data to parent
  @Output()
  onSendRequest = new EventEmitter<string>();
  text: string = ""


  constructor() { }

  ngOnInit(): void {
  }
  sendDataToParent() {
    //emit/send data to parent
    this.onSendRequest.emit(this.text)
    this.text = ""
  }

}
