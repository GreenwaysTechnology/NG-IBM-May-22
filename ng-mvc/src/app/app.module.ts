import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterModule } from './greeter/greeter.module';
import { HeroesModule } from './heroes/heroes.module';
import { ProfileService } from './profiles/profile.service';
import { ProfilesModule } from './profiles/profiles.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GreeterModule,
    HeroesModule,
    ProfilesModule,
  ],
  //providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
