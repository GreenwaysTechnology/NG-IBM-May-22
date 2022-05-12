import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styles: [
  ]
})
export class UsersListComponent implements OnInit {

  @Input()
  user:any
  constructor() { }

  ngOnInit(): void {
  }

}
