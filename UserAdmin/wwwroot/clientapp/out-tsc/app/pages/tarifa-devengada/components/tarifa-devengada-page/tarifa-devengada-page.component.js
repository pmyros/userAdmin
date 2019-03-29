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
import { ApiService } from "../../../../services/api/api.service";
import { TarifaDevengadaService } from "../../services/tarifa-devengada.service.service";
var TarifaDevengadaPageComponent = /** @class */ (function () {
    function TarifaDevengadaPageComponent(api, _ts) {
        this.api = api;
        this._ts = _ts;
        this.mcs = [];
        this.isLoadingDataResults = true;
        this.isLoadingMcsResults = true;
        this.url = "https://ngnetcoreapi.azurewebsites.net/api/tarifadevengada";
    }
    TarifaDevengadaPageComponent.prototype.ngOnInit = function () {
        this.getMcs();
        this.getAllDevengadas();
    };
    TarifaDevengadaPageComponent.prototype.getAllDevengadas = function () {
        var _this = this;
        this.isLoadingDataResults = true;
        this._ts.getAll().subscribe(function (res) {
            _this.data = res;
            _this.isLoadingDataResults = false;
        }, function (err) {
            console.log(err);
            _this.isLoadingDataResults = false;
        });
    };
    TarifaDevengadaPageComponent.prototype.GetDevengadasByMC = function (mc) {
        var _this = this;
        this.isLoadingDataResults = true;
        this._ts.getByMC(mc).subscribe(function (res) {
            _this.data = res;
            _this.isLoadingDataResults = false;
        }, function (err) {
            console.log(err);
            _this.isLoadingDataResults = false;
        });
    };
    TarifaDevengadaPageComponent.prototype.onMcSelected = function (mc) {
        this.isLoadingDataResults = true;
        if (mc == 0) {
            this.getAllDevengadas();
        }
        else {
            this.GetDevengadasByMC(mc);
        }
    };
    TarifaDevengadaPageComponent.prototype.getMcs = function () {
        var _this = this;
        this.api.getMiembrosCompensadores().subscribe(function (res) {
            _this.mcs = res;
            _this.isLoadingMcsResults = false;
        }, function (err) {
            console.log(err);
            _this.isLoadingMcsResults = false;
        });
    };
    TarifaDevengadaPageComponent = __decorate([
        Component({
            selector: "app-tarifa-devengada-page",
            templateUrl: "./tarifa-devengada-page.component.html",
            styleUrls: ["./tarifa-devengada-page.component.css"]
        }),
        __metadata("design:paramtypes", [ApiService, TarifaDevengadaService])
    ], TarifaDevengadaPageComponent);
    return TarifaDevengadaPageComponent;
}());
export { TarifaDevengadaPageComponent };
//# sourceMappingURL=tarifa-devengada-page.component.js.map