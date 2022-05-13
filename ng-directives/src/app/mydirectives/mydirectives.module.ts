import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ConditionalrenderingComponent } from './conditionalrendering.component';
import { SwitchcaseComponent } from './switchcase.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
      ListComponent,
      ConditionalrenderingComponent,
      SwitchcaseComponent,
      HighlightDirective
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [ListComponent,ConditionalrenderingComponent,SwitchcaseComponent,HighlightDirective]
})
export class MydirectivesModule { }
