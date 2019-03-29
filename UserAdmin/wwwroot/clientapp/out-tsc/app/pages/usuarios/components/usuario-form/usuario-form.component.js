var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, Output, EventEmitter } from "@angular/core";
import { MessageService } from "primeng/api";
import { Validators, FormBuilder } from "@angular/forms";
import { ApiService } from "../../../../services/api/api.service";
import { UsuariosService } from "../../services/usuarios.service";
import { ValidateUrl } from "../../../../shared/validators/validators";
var UsuarioFormComponent = /** @class */ (function () {
    function UsuarioFormComponent(_formBuilder, _api, _usrService, _msgService) {
        this._formBuilder = _formBuilder;
        this._api = _api;
        this._usrService = _usrService;
        this._msgService = _msgService;
        this.reloadTable = new EventEmitter();
        this.isLinear = true;
        this.unamePattern = "[a-zA-Z][a-zA-Z0-9-_]{3,32}";
        this.mcs = [];
        this.selectedCims = [];
    }
    Object.defineProperty(UsuarioFormComponent.prototype, "formArray", {
        get: function () {
            return this.formGroup.get("formArray");
        },
        enumerable: true,
        configurable: true
    });
    UsuarioFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.fillMcs();
    };
    UsuarioFormComponent.prototype.buildForm = function () {
        this.personalFormGroup = this._formBuilder.group({
            name: ["", Validators.required],
            email: ["", Validators.email],
            url: ["", [Validators.required, ValidateUrl]]
        });
        this.accountFormGroup = this._formBuilder.group({
            mc: ["", Validators.required],
            cim: ["", Validators.required]
        });
    };
    UsuarioFormComponent.prototype.fillMcs = function () {
        var _this = this;
        this._api.getMiembrosCompensadores().subscribe(function (res) {
            _this.mcs = res;
        });
    };
    UsuarioFormComponent.prototype.mcChanged = function (mc) {
        var _this = this;
        var target = mc.source.selected._element.nativeElement;
        this.selectedMC = {
            value: mc.value,
            text: target.innerText.trim()
        };
        this._api.getCuentasCompensacionByMC(mc.value).subscribe(function (res) {
            _this.selectedCims = res;
        });
    };
    UsuarioFormComponent.prototype.cimChanged = function (cim) {
        var target = cim.source.selected._element.nativeElement;
        this.selectedCIM = {
            value: cim.value,
            text: target.innerText.trim()
        };
    };
    UsuarioFormComponent.prototype.submit = function () {
        var _this = this;
        var nombre = this.personalFormGroup.value.name;
        var email = this.personalFormGroup.value.email;
        var mc = this.accountFormGroup.value.mc;
        var cim = this.accountFormGroup.value.cim;
        this.usr = { nombre: nombre, email: email, mc: mc, cim: cim };
        this._usrService.create(this.usr).subscribe(function (res) {
            _this.resetControls();
            _this._msgService.add({
                severity: "success",
                summary: "Usuario creado!",
                detail: "Via MessageService"
            });
            _this.reloadTable.emit(true);
        });
    };
    UsuarioFormComponent.prototype.resetControls = function () {
        this.accountFormGroup.reset();
        this.personalFormGroup.reset();
        this.stepper.reset();
    };
    __decorate([
        ViewChild("stepper"),
        __metadata("design:type", Object)
    ], UsuarioFormComponent.prototype, "stepper", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UsuarioFormComponent.prototype, "reloadTable", void 0);
    UsuarioFormComponent = __decorate([
        Component({
            selector: "app-usuario-form",
            templateUrl: "./usuario-form.component.html",
            styleUrls: ["./usuario-form.component.css"],
            providers: [MessageService]
        }),
        __metadata("design:paramtypes", [FormBuilder,
            ApiService,
            UsuariosService,
            MessageService])
    ], UsuarioFormComponent);
    return UsuarioFormComponent;
}());
export { UsuarioFormComponent };
//# sourceMappingURL=usuario-form.component.js.map