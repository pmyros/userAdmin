var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '../../../services/translate/translate.service';
import { Router } from '@angular/router';
import { SignalRService } from '../../../services/signal-r.service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, router, _signalRServices) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this._signalRServices = _signalRServices;
        this.sidenavToggle = new EventEmitter();
        this.onToggleSidenav = function () {
            _this.sidenavToggle.emit();
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
        console.log(sessionStorage.getItem('LANG'));
        this._signalRServices.startMessageConnection();
        this._signalRServices.startListeningMessages();
    };
    HeaderComponent.prototype.setLang = function (lang) {
        this.translate.use(lang);
        this.router.navigate(['/home']);
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "sidenavToggle", void 0);
    HeaderComponent = __decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        __metadata("design:paramtypes", [TranslateService, Router, SignalRService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map