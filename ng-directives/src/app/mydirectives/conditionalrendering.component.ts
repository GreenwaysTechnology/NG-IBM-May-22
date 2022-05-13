import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditionalrendering',
  template: `
  <div *ngIf="isEnabled; else mycondition">
    <h1>You have Facility!</h1>
</div>
<ng-template #mycondition>
    <h1>Sorry! Facility is not available</h1>
</ng-template>
 
  <h1>Progress Bar </h1>
  <div *ngIf="loading; else notLoading  ">
    <h2>{{status}}</h2>
</div>
<ng-template #notLoading>
    <div *ngFor="let user of users">
        <h3>{{user.id}}</h3>
        <p>{{user.name}}</p>
     </div>
</ng-template>
  `,
  styles: [
  ]
})
export class ConditionalrenderingComponent implements OnInit {
  isEnabled: boolean = true
  //progress bar 
  loading: boolean = true;
  status: string = "loading....."
  users: Array<any> = []

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.users = [
        { id: 1, name: 'a1' },
        { id: 2, name: 'a2' },
        { id: 3, name: 'a3' },
      ]
      this.loading = !this.loading;
    }, 10000)
  }

}
