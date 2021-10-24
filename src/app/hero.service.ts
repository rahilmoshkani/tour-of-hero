import { HERO } from './hero/hero-detail/hero';
import { Injectable } from '@angular/core';
import { HEROES } from './hero/mock-heroes';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService:MessageService) { }

  getHeroes():Observable<HERO[]>{
  const heroes = of (HEROES);
  this.messageService.add('HeroService:fetched heroes');
    return heroes;
}

 getHero(id:number):Observable<HERO>{
   const hero =HEROES.find(h => h.id ===id)!;
   this.messageService.add(`HeroService:fetched hero id=${id}`);
   return of(hero);
 }
}
