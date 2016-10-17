"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var mock_heroes_1 = require('./mock-heroes');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var angular2_jwt_1 = require('angular2-jwt');
// constructor(public router: Router, public http: Http,) {
//    this.jwt = localStorage.getItem('id_token');
//    this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
//  }
var HeroService = (function () {
    function HeroService(http, authHttp, router //,
        ) {
        this.http = http;
        this.authHttp = authHttp;
        this.router = router;
        this.heroesUrl = 'http://localhost:1337/product/';
        this.jwt = localStorage.getItem('id_token');
        console.log("JWT TOKEN IS ", this.jwt, window /*, JwtHelper.decodeToken(this.jwt)*/);
        // this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
    }
    HeroService.prototype.getHeroesList = function () {
        return this.http.get(this.heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HeroService.prototype.removeHeros = function (id) {
        return this.http.delete(this.heroesUrl + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HeroService.prototype.updateHeros = function (id, obj) {
        return this.http.put(this.heroesUrl + id, obj)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HeroService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    HeroService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    HeroService.prototype.getHeroes = function () {
        console.log("HEROES", mock_heroes_1.HEROES);
        return Promise.resolve(mock_heroes_1.HEROES);
    };
    HeroService.prototype.getHeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 2000);
        }) // delay 2 seconds
            .then(function () { return _this.getHeroes(); });
    };
    HeroService.prototype.getHero = function (id) {
        return this.http.get(this.heroesUrl + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp, router_1.Router])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=hero.service.js.map