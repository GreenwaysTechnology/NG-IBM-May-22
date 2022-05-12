import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFormatComponent } from './data-format.component';
import { HttpClientModule } from '@angular/common/http'
import { TodoComponent } from './todo.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DataFormatComponent, TodoComponent
  ],
  imports: [
    CommonModule, HttpClientModule, SharedModule
  ],
  exports: [
    DataFormatComponent
  ]
})
export class InfoModule { }
