import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params , Router } from '@angular/router';
import { Location }               from '@angular/common';

import { Hero }         from './hero';
import { HeroService }  from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: [ 'hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  errorMessage:string;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    public router: Router,    
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
    });
  }

  update():void {
    console.log("Current Hero" , this.hero);

    this.heroService.updateHeros(this.hero.id , this.hero)
                     .subscribe(
                       heroes => {
                         // TODO navigate to list page 
                         // this.heroes = heroes ; console.log("Heroes " , heroes );
                                 this.router.navigate(['dashboard']);



                       },
                       error =>  this.errorMessage = <any>error);


    

  }

  goBack(): void {
    this.location.back();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/