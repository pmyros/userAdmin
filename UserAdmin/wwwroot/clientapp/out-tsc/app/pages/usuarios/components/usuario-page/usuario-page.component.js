var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { UsuariosService } from "../../services/usuarios.service";
var UsuarioPageComponent = /** @class */ (function () {
    function UsuarioPageComponent(_us) {
        this._us = _us;
        this.usuarios = [];
        this.isLoadingDataResults = false;
    }
    UsuarioPageComponent.prototype.ngOnInit = function () {
        //get usuarios
        this.getAllUsuarios();
    };
    UsuarioPageComponent.prototype.reloadTable = function (event) {
        this.getAllUsuarios();
    };
    UsuarioPageComponent.prototype.onRowDeleted = function (event) {
        this._us.delete(event.usuarioID).subscribe(function (res) {
            console.log(res);
        });
    };
    UsuarioPageComponent.prototype.getAllUsuarios = function () {
        var _this = this;
        this.isLoadingDataResults = true;
        this._us.getAll().subscribe(function (res) {
            _this.usuarios = res;
            _this.isLoadingDataResults = false;
        }, function (err) {
            console.log(err);
            _this.isLoadingDataResults = false;
        });
    };
    UsuarioPageComponent = __decorate([
        Component({
            selector: "app-usuario-page",
            templateUrl: "./usuario-page.component.html",
            styleUrls: ["./usuario-page.component.css"]
        }),
        __metadata("design:paramtypes", [UsuariosService])
    ], UsuarioPageComponent);
    return UsuarioPageComponent;
}());
export { UsuarioPageComponent };
//# sourceMappingURL=usuario-page.component.js.map