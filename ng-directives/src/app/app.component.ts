import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-directives';
  skills: Array<string> = ["angular", "java", "spring", "react", "js"];

}
