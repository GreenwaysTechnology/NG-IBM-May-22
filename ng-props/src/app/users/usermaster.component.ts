import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-usermaster',
  templateUrl: './usermaster.component.html',
  styles: [
  ]
})
export class UsermasterComponent implements OnInit {

  users!: Observable<any>
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.findAll()
  }

}
