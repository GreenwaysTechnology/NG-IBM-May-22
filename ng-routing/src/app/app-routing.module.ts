import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './error/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  },
  //http://localhost:4200/myhero/hero
  {
    path: 'myhero', loadChildren: () => import("./heros/heros-routing.module").then(m => m.HerosRoutingModule)
  },
  {
    path: 'contact', component: ContactComponent,
  },
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  {
    path: '**', component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
