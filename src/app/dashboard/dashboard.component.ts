import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { HERO } from '../hero/hero-detail/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
heroes:HERO[]=[];

  constructor(private heroservice:HeroService) { }

  ngOnInit(): void {
    this.getHeroes();

  }
getHeroes():void{
  this.heroservice.getHeroes()
  .subscribe(heroes=>this.heroes=heroes.slice(1,5));
}
}
