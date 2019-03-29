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
import { FormGroup, Validators, FormControl } from "@angular/forms";
var TarifaDevengadaFormComponent = /** @class */ (function () {
    function TarifaDevengadaFormComponent() {
        this.selectedMC = new EventEmitter();
        this.form = new FormGroup({
            mc: new FormControl("", Validators.required)
        });
    }
    TarifaDevengadaFormComponent.prototype.ngOnInit = function () { };
    TarifaDevengadaFormComponent.prototype.selectMC = function (all) {
        if (all) {
            this.selectedMC.emit('0');
            this.form.reset();
        }
        else {
            this.selectedMC.emit(this.form.value.mc);
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], TarifaDevengadaFormComponent.prototype, "mcs", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TarifaDevengadaFormComponent.prototype, "selectedMC", void 0);
    TarifaDevengadaFormComponent = __decorate([
        Component({
            selector: "app-tarifa-devengada-form",
            templateUrl: "./tarifa-devengada-form.component.html",
            styleUrls: ["./tarifa-devengada-form.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], TarifaDevengadaFormComponent);
    return TarifaDevengadaFormComponent;
}());
export { TarifaDevengadaFormComponent };
//# sourceMappingURL=tarifa-devengada-form.component.js.map