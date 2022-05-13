import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchcase',
  template: `
    <input [(ngModel)]="input">
<button (click)="showFeedback()">Show Feedback</button>

<div [ngSwitch]="feedback">
    <p *ngSwitchCase="'good'">Good</p>
    <p *ngSwitchCase="'verygood'">Very Good</p>
    <p *ngSwitchCase="'bad'">Bad</p>
    <p *ngSwitchDefault>Your input is not matching</p>
</div>

<div [ngSwitch]="feedback">
    <ng-template [ngSwitchCase]="'good'">
        <h3>Good</h3>
    </ng-template>
    <ng-template [ngSwitchCase]="'verygood'">
        <h3>Very Good</h3>
    </ng-template>
    <ng-template [ngSwitchCase]="'bad'">
        <h3>bad</h3>
    </ng-template>
    <ng-template ngSwitchDefault>
        <h3>Your input is not matching</h3>
    </ng-template>
</div>
  `,
  styles: [
  ]
})
export class SwitchcaseComponent implements OnInit {

  input: string = ""
  feedback: string = "good"
  constructor() { }
  showFeedback() {
    this.feedback = this.input
  }

  ngOnInit(): void {
  }

}
