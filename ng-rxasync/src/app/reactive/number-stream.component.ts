import { Component, OnInit } from '@angular/core';
import { NumberService } from './number-service.service';

@Component({
  selector: 'app-number-stream',
  templateUrl: './number-stream.component.html',
  styles: [
  ]
})
export class NumberStreamComponent implements OnInit {

  stream$: Array<number> = [];
  constructor(private numService: NumberService) { }


  ngOnInit(): void {
    this.numService.getNumbers().subscribe(num => {
      console.log(`stream data  : ${num}`)
      this.stream$.push(num);
    }, err => {
      console.log(err)
    }, () => {
      console.log('done');
    });
  }

}
