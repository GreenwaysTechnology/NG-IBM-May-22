import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styles: [
  ]
})
export class AddressComponent implements OnInit {

  @Input()
  address!: any
  constructor() { }

  ngOnInit(): void {
    console.log(this.address)
  }

}
