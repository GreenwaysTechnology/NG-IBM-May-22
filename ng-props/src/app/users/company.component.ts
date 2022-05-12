import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styles: [
  ]
})
export class CompanyComponent implements OnInit {

  @Input()
  company:any 
  constructor() { }

  ngOnInit(): void {
  }

}
