import { HERO } from './hero/hero-detail/hero';
import { Injectable } from '@angular/core';
import { HEROES } from './hero/mock-heroes';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {catchError,map,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService:MessageService,private http:HttpClient) { }
  /** log a HeroService message with the MessageService*/
  private log(message:string){
    this.messageService.add(`HeroService:${message}`);
  }
  private heroesUrl='api/heroes'; //url to web api

/**GET heroes from the server */
  getHeroes():Observable<HERO[]>{
  return this.http.get<HERO[]>(this.heroesUrl)
  .pipe(
    catchError(this.handleError<HERO[]>('getHeroes',[]))
  );
  }
  


 getHero(id:number):Observable<HERO>{
   const hero =HEROES.find(h => h.id ===id)!;
   this.messageService.add(`HeroService:fetched hero id=${id}`);
   return of(hero);
 }
}
