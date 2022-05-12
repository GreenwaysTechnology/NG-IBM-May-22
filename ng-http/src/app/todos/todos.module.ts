import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo.component'


@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [
    TodoComponent
  ]
})
export class TodosModule { }
