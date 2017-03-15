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
//import { ArraySortPipe } from "./pipe";
var DashboardComponent = (function () {
    function DashboardComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.heroes = [];
    }
    DashboardComponent.prototype.getSorted = function (args) {
        var _this = this;
        if (this.orderType == 1) {
            if (args == 'firstName') {
                this.sortFN = 'fa fa-sort-desc';
                this.sortLN = 'fa fa-sort';
            }
            if (args == 'lastName') {
                this.sortFN = 'fa fa-sort';
                this.sortLN = 'fa fa-sort-desc';
            }
            this.orderType = -1;
        }
        else {
            if (args == 'firstName') {
                this.sortFN = 'fa fa-sort-asc';
                this.sortLN = 'fa fa-sort';
            }
            if (args == 'lastName') {
                this.sortFN = 'fa fa-sort';
                this.sortLN = 'fa fa-sort-asc';
            }
            this.orderType = 1;
        }
        this.heroes.sort(function (a, b) {
            if (_this.orderType == 1) {
                if (a[args] < b[args]) {
                    return -1;
                }
                else if (a[args] > b[args]) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
            else {
                if (a[args] < b[args]) {
                    return 1;
                }
                else if (a[args] > b[args]) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
        });
        return;
    };
    DashboardComponent.prototype.getHeroesList = function () {
        var _this = this;
        console.log("getHeroesList", this.heroService);
        this.heroService.getHeroesList()
            .subscribe(function (heroes) { _this.heroes = heroes; console.log("Heroes ", heroes); }, function (error) { return _this.errorMessage = error; });
    };
    DashboardComponent.prototype.deleteEmployee = function (id) {
        var _this = this;
        console.log("selected hero", id);
        this.heroService.removeHeros(id)
            .subscribe(function (heroes) {
            // this.heroes = heroes ; 
            var heroeslist = _this.heroes;
            for (var i = 0; i < heroeslist.length; i++) {
                if (heroeslist[i].id == id) {
                    _this.heroes.splice(i, 1);
                }
            }
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.getHeroesList();
        this.sortFN = 'fa fa-sort';
        this.sortLN = 'fa fa-sort';
    };
    DashboardComponent.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero.id];
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            //pipes: [ DatePipe,ArraySortPipe],
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=dashboard.component.js.map