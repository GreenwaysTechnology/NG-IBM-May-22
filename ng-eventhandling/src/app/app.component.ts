import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //state 
  text: string = ""
  textOne: string = ""
  textTwo: string = "defaultvalue"
  textThree: String = "defaultValue"

  userInfo = {
    firstName: '',
    lastName: '',
    city: ''
  }

  //behaviour: event handler
  public onSubmit() {
    //logic to be written when some event happens
    alert('Hello')
  }
  onReceive(message: string) {
    alert(message)
  }
  readInput(evt: any) {
    // console.log('input listener is called')
    console.log(evt.target.value)
    this.text = evt.target.value
  }
}
