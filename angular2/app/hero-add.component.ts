import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { Location }               from '@angular/common';
import { Http, Headers }          from '@angular/http';
import { Hero }                   from './hero';
import { HeroService }            from './hero.service';
import { contentHeaders }         from './headers';

@Component({
  moduleId: module.id,
  selector: 'my-hero-add',
  templateUrl: 'hero-add.component.html',
  styleUrls: [ 'hero-detail.component.css' ]
})
export class HeroAddComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    public http:Http,
    public router: Router  
  ) {}
  model =new Hero();

  productTypes = [ 'Small','Medium', 'Large'];
  active = true;    


  onSubmit(event) {
   console.log("Trigger here ",this ,this.model ,event );
   // TODO - call a service here and save details to db 
    event.preventDefault();
    this.saveProduct(this.model);


  }            

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }

  goBack(): void {
    this.location.back();
  }

 saveProduct(prductDetail) {
    let body = JSON.stringify(prductDetail);
    this.http.post('http://localhost:1337/product/', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigate(['home']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/