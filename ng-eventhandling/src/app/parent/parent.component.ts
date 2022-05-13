import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
     <h1>Parent</h1>
        <h2>Data From Child {{text}} </h2>
          <ul>
             <li *ngFor="let quote of quotes">
                 {{quote}}
             </li>
          <ul>
      <hr>
      <app-child (onSendRequest)="receiveData($event)" ></app-child>
  `,
  styles: [
  ]
})
export class ParentComponent implements OnInit {

  text: string = ""
  quotes: Array<string> = []
  constructor() { }

  ngOnInit(): void {
  }
  //listener to read data which sent by client
  public receiveData(evt: any) {
    //alert(evt)
    this.text = evt
    this.quotes.push(evt)
  }

}
