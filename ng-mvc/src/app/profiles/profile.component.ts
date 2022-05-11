import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../shared/logger.service';
import { Profile } from '../types/profile.type';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //profiles 
  profiles: Array<Profile> = []
  messages: Array<String> = []

  //inject rofileService object
  constructor(private profileService: ProfileService, private logger: LoggerService) {
  }

  ngOnInit(): void {
    this.messages = this.logger.fetch()
    this.profiles = this.profileService.findAll()

  }

}
