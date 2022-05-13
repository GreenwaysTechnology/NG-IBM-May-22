import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html'
})
export class HeroComponent implements OnInit {

  // heroes!: Observable<any[]>
  heroes: Array<any> = []
  constructor(private heroService: HeroService, private router: Router) { }


  ngOnInit(): void {
    //  this.heroes = this.heroService.findAll()
    this.heroService.findAll().subscribe(heroes => {
      console.log(heroes)
      this.heroes = heroes
    })
  }
  goToHome() {
    this.router.navigate(['home'])
  }

}
