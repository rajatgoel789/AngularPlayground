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
// Tell Angular2 we're creating a Pipe with TypeScript decorators
var AgePipe = (function () {
    function AgePipe() {
    }
    // Transform is the new "return function(value, args)" in Angular 1.x
    AgePipe.prototype.transform = function (value, args) {
        // ES6 array destructuring
        var minAge = args[0];
        return value.filter(function (person) {
            return person.age >= +minAge;
        });
    };
    AgePipe = __decorate([
        core_1.Pipe({
            name: 'AgePipe'
        }), 
        __metadata('design:paramtypes', [])
    ], AgePipe);
    return AgePipe;
}());
exports.AgePipe = AgePipe;
//# sourceMappingURL=age-pipe.js.map