import { Component, OnInit } from '@angular/core';
import { GreeterStreamService } from './greeter-stream.service';

@Component({
  selector: 'app-greeter-stream',
  templateUrl: './greeter-stream.component.html',
  styles: [
  ]
})
export class GreeterStreamComponent implements OnInit {

  message: Array<string> = []

  constructor(private greeterStreamService: GreeterStreamService) { }

  ngOnInit(): void {
    //subscriber 
    this.greeterStreamService.sayHello().subscribe(data => {
      console.log(data)
      this.message.push(data);
    },)
  }

}
