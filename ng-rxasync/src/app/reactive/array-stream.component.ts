import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArrayService } from './array.service';

@Component({
  selector: 'app-array-stream',
  templateUrl: './array-stream.component.html',
  styles: [
  ]
})
export class ArrayStreamComponent implements OnInit {
  nums: number[] = [];
  num: number[] = []
  constructor(private arrayStreamService: ArrayService) { }

  ngOnInit(): void {
    this.arrayStreamService.getNumbers().subscribe(nums => {
      console.log(nums)
      this.nums = nums
    })

    //using from oper
    this.arrayStreamService.getNumberList().subscribe(num => {
      console.log(num)
      this.num.push(num)
    })
  }

}
