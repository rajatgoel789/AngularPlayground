import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule }  from '@angular/http';

import { AppComponent }         from './app.component';
// import { AUTH_PROVIDERS }       from 'angular2-jwt';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroAddComponent }     from './hero-add.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';
import { routing }              from './app.routing';

import './rxjso'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,    
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroAddComponent,
    HeroesComponent
  ],
  providers: [
    HeroService //, ...AUTH_PROVIDERS
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/