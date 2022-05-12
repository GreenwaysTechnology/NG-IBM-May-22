import { Component, OnInit } from '@angular/core';
import { DataProcessingStreamService } from './data-processing-stream.service';

@Component({
  selector: 'app-data-processing-stream',
  templateUrl: './data-processing-stream.component.html',
  styles: [
  ]
})
export class DataProcessingStreamComponent implements OnInit {
  stream$: Array<number> = [];
  streamFilter$: Array<number> = [];
  todos: Array<any> = []

  constructor(private dataStreamService: DataProcessingStreamService) { }

  ngOnInit(): void {
    this.dataStreamService.getValue().subscribe(value => {
      this.stream$.push(value)
    })
    this.dataStreamService.findEvenNumbers().subscribe(value => {
      this.streamFilter$.push(value)
    })
    this.dataStreamService.findEvenNumbersFromArray().subscribe(value => {
      this.streamFilter$.push(value)
    })
    this.dataStreamService.findAllCompletedTodos().subscribe(todo => {
      this.todos.push(todo)
    })
  }

}
