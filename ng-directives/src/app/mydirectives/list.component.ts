import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
  <h1>Sub Module</h1>
     <ul>
       <li *ngFor="let skill of skills">
         <span>{{skill}}</span>
       </li>
     </ul>
  `,
  styles: [
  ]
})
export class ListComponent implements OnInit {

  skills: Array<string> = ["angular", "java", "spring", "react", "js"];
  constructor() { }

  ngOnInit(): void {
  }

}
