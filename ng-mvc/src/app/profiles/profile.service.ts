import { Injectable } from '@angular/core';
import { LoggerService } from '../shared/logger.service';
import { Profile } from '../types/profile.type';

@Injectable({
  providedIn: 'root' // angular uses global injector to create service object
})
// @Injectable()
export class ProfileService {

  //state
  private profiles: Array<Profile> = [{
    id: 1,
    name: 'Subramanian',
    status: true,
    gender: "Male",
    address: {
      city: 'New York'
    }
  },
  {
    id: 2,
    name: 'Kavitha',
    status: true,
    gender: "Female",
    address: {
      city: 'London'
    }
  },
  {
    id: 3,
    name: 'John',
    status: false,
    gender: "Male",
    address: {
      city: 'CA'
    }
  }

  ];

  constructor(private logger: LoggerService) { }

  //biz methods

  public findAll(): Array<Profile> {
    this.logger.add('findAll profiles called')
    return this.profiles
  }

}
