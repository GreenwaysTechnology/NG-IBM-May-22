import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-format',
  templateUrl: './data-format.component.html',
  styles: [
  ]
})
export class DataFormatComponent implements OnInit {
  message: string = "hello!"
  price: number = 1000.898766
  date: Date = new Date()
  mynumber: number = 18.78343434

  emp = {
    id: 1,
    name: 'Subramanian',
    city: 'Coimbatore'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
