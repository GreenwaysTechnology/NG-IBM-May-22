import { Component } from '@angular/core';
import { Hero } from './hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //create model object with default values
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;

  //onSubmit listener
  onSubmit() {
    console.log(this.model)
    this.submitted = true
  }
}
