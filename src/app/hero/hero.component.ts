import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { HERO } from './hero-detail/hero';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
 
  
  
  heroes:HERO[]=[];
  
  constructor(private heroService:HeroService) {

   }

  ngOnInit() {
    this.getHeroes();
  
  }



getHeroes():void{
  this.heroService.getHeroes()
.subscribe(heroes =>this.heroes=heroes);
}

}
