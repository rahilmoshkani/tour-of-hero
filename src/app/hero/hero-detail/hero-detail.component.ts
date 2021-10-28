import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/hero.service';
import { HERO } from './hero';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero: HERO | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroservice: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroservice.getHero(id).subscribe((hero) => (this.hero = hero));
  }
  goback(): void {
    this.location.back();
  }
  save(): void {
    if (this.hero) {
      this.heroservice.updateHero(this.hero).subscribe(() => this.goback());
    }
  }
}
