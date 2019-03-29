var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TranslatePipe } from "../../../../pipes/translate.pipe";
var UsuarioListComponent = /** @class */ (function () {
    function UsuarioListComponent(_t) {
        this._t = _t;
        this.rowDeleted = new EventEmitter();
        this.filename = "Usuarios";
    }
    UsuarioListComponent.prototype.translate = function (text) {
        return this._t.transform(text);
    };
    UsuarioListComponent.prototype.onRowDeleted = function (event) {
        this.rowDeleted.emit(event);
    };
    UsuarioListComponent.prototype.ngOnInit = function () {
        this.columns = [
            {
                dataField: "nombre",
                caption: this.translate("NOMBRE"),
                dataType: "string"
            },
            {
                dataField: "email",
                caption: this.translate("EMAIL"),
                dataType: "string"
            },
            {
                dataField: "mc",
                caption: this.translate("ALYC"),
                dataType: "string"
            },
            {
                dataField: "cim",
                caption: this.translate("CIM"),
                dataType: "string"
            }
        ];
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], UsuarioListComponent.prototype, "usuarios", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UsuarioListComponent.prototype, "rowDeleted", void 0);
    UsuarioListComponent = __decorate([
        Component({
            selector: "app-usuario-list",
            templateUrl: "./usuario-list.component.html",
            styleUrls: ["./usuario-list.component.css"]
        }),
        __metadata("design:paramtypes", [TranslatePipe])
    ], UsuarioListComponent);
    return UsuarioListComponent;
}());
export { UsuarioListComponent };
//# sourceMappingURL=usuario-list.component.js.map