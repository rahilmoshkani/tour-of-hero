import { HERO } from './hero/hero-detail/hero';
import { Injectable } from '@angular/core';
import { HEROES } from './hero/mock-heroes';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService:MessageService,http:HttpClient) { }
  /** log a HeroService message with the MessageService*/
  private log(message:string){
    this.messageService.add(`HeroService:${message}`);
  }
  private heroesUrl='api/heroes'; //url to web api

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
