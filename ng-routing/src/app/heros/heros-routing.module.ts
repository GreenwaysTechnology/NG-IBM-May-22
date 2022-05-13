import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero.component';
import { HerodetailComponent } from './herodetail.component';

const routes: Routes = [{
  path: 'hero', component: HeroComponent
},
{ path: 'detail/:id', component: HerodetailComponent },

{ path: '', redirectTo: "hero", pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HerosRoutingModule { }
