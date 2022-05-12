import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo.type';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent implements OnInit {

  todos: Array<Todo> = [];
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.findAllTodos().subscribe(todos => {
      this.todos = todos
    })
  }

}
