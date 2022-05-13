import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MydirectivesModule } from './mydirectives/mydirectives.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MydirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
