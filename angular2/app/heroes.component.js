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
var hero_service_1 = require('./hero.service');
var HeroesComponent = (function () {
    function HeroesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.getHeroesList = function () {
        var _this = this;
        console.log("getHeroesList", this.heroService);
        this.heroService.getHeroesList()
            .subscribe(function (heroes) { _this.heroes = heroes; console.log("Heroes ", heroes); }, function (error) { return _this.errorMessage = error; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        // this.getHeroes();
        this.getHeroesList();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroesComponent.prototype.deleteDetail = function () {
        // console.log("selected hero" , this.selectedHero ) ;
        var _this = this;
        this.heroService.removeHeros(this.selectedHero.id)
            .subscribe(function (heroes) {
            // this.heroes = heroes ; 
            var heroeslist = _this.heroes;
            for (var i = 0; i < heroeslist.length; i++) {
                if (heroeslist[i].id == _this.selectedHero.id) {
                    _this.heroes.splice(i, 1);
                    delete _this.selectedHero;
                }
            }
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    HeroesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-heroes',
            templateUrl: 'heroes.component.html',
            styleUrls: ['heroes.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map