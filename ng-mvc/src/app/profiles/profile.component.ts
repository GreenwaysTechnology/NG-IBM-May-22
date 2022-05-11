import { Component, OnInit } from '@angular/core';
import { Profile } from '../types/profile.type';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //profiles 
  profiles: Array<Profile>

  //inject ProfileService object
  constructor(private profileService: ProfileService) {
    this.profiles = this.profileService.findAll()
  }

  ngOnInit(): void {
  }

}
