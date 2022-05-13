import { NgModule } from '@angular/core';
import { HerosRoutingModule } from './heros-routing.module';
import { HeroComponent } from './hero.component';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { HerodetailComponent } from './herodetail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeroComponent,
    HerodetailComponent
  ],
  imports: [
    HerosRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [HeroComponent]
})
export class HerosModule { }
