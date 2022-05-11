import { Component, OnInit } from '@angular/core';
import { Address } from '../types/address.type';
import { Movie } from '../types/movie.type';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  //state
  name: string = "James Bond"
  age: number = 50
  status: boolean = true
  address: Address = {
    city: 'new york',
  }
  movies: Array<Movie> = [{
    id: 1,
    name: 'Goldfinger'
  },
  {
    id: 2,
    name: 'Dr.No'
  },
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
