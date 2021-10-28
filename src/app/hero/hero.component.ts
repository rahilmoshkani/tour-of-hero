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

add(name:string):void{
  name=name.trim();
  if(!name){return;}
  this.heroService.addHero({name} as HERO)
  .subscribe(hero => {
    this.heroes.push(hero);
  });
}

delete(hero:HERO):void{
  this.heroes=this.heroes.filter(h=>h !==hero);
  this.heroService.deleteHero(hero.id).subscribe();
}
}
