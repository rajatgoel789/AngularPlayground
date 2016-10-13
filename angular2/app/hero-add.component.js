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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var hero_1 = require('./hero');
var hero_service_1 = require('./hero.service');
var headers_1 = require('./headers');
var HeroAddComponent = (function () {
    function HeroAddComponent(heroService, route, location, http, router) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
        this.http = http;
        this.router = router;
        this.model = new hero_1.Hero();
        this.productTypes = ['Small', 'Medium', 'Large'];
        this.active = true;
    }
    HeroAddComponent.prototype.onSubmit = function (event) {
        console.log("Trigger here ", this, this.model, event);
        // TODO - call a service here and save details to db 
        event.preventDefault();
        this.saveProduct(this.model);
    };
    HeroAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.heroService.getHero(id)
                .then(function (hero) { return _this.hero = hero; });
        });
    };
    HeroAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroAddComponent.prototype.saveProduct = function (prductDetail) {
        var _this = this;
        var body = JSON.stringify(prductDetail);
        this.http.post('http://localhost:1337/product/', body, { headers: headers_1.contentHeaders })
            .subscribe(function (response) {
            localStorage.setItem('id_token', response.json().id_token);
            _this.router.navigate(['home']);
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    HeroAddComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-hero-add',
            templateUrl: 'hero-add.component.html',
            styleUrls: ['hero-detail.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute, common_1.Location, http_1.Http, router_1.Router])
    ], HeroAddComponent);
    return HeroAddComponent;
}());
exports.HeroAddComponent = HeroAddComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=hero-add.component.js.map