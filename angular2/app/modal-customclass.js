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
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var NgbdModalCustomclass = (function () {
    function NgbdModalCustomclass(modalService) {
        this.modalService = modalService;
    }
    NgbdModalCustomclass.prototype.open = function (content) {
        this.modalService.open(content, { windowClass: 'dark-modal' });
    };
    NgbdModalCustomclass = __decorate([
        core_1.Component({
            selector: 'ngbd-modal-customclass',
            templateUrl: 'app/modal-customclass.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: ["\n    .dark-modal .modal-content {\n      background-color: #292b2c;\n      color: white;\n    }\n    .dark-modal .close {\n      color: white;   \n    }\n  "]
        }), 
        __metadata('design:paramtypes', [ng_bootstrap_1.NgbModal])
    ], NgbdModalCustomclass);
    return NgbdModalCustomclass;
}());
exports.NgbdModalCustomclass = NgbdModalCustomclass;
//# sourceMappingURL=modal-customclass.js.map