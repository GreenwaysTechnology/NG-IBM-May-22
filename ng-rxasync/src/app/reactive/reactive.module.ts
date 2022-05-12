import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreeterStreamComponent } from './greeter-stream.component';
import { NumberStreamComponent } from './number-stream.component';
import { ArrayStreamComponent } from './array-stream.component';
import { DataProcessingStreamComponent } from './data-processing-stream.component';
import { ErrorHandlingComponent } from './error-handling.component';



@NgModule({
  declarations: [
    GreeterStreamComponent,
    NumberStreamComponent,
    ArrayStreamComponent,
    DataProcessingStreamComponent,
    ErrorHandlingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GreeterStreamComponent,
    NumberStreamComponent,
    ArrayStreamComponent,
    DataProcessingStreamComponent,
    ErrorHandlingComponent
  ]
})
export class ReactiveModule { }
