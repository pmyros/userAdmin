var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
var httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
};
var apiUrl = "https://ngnetcoreapi.azurewebsites.net/api/tarifadevengada"; //localhost:5000
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getTarifasDevengadas = function () {
        return this.http.get(apiUrl).pipe(tap(function (res) { return console.log("fetched   TarifasDevengadas"); }), catchError(this.handleError("getTarifasDevengada", [])));
    };
    ApiService.prototype.getMiembrosCompensadores = function () {
        var url = apiUrl + "/GetMiembrosCompensadores/";
        return this.http.get(url).pipe(tap(function (res) { return console.log("fetched MCs"); }), catchError(this.handleError("GetMiembrosCompensadores", [])));
    };
    ApiService.prototype.getCuentasCompensacionByMC = function (mc) {
        var url = apiUrl + "/GetCuentasCompensacionByMC/" + mc;
        return this.http.get(url).pipe(tap(function (res) { return console.log("fetched CIMS"); }), catchError(this.handleError("getCuentasCompensacionByMC", [])));
    };
    ApiService.prototype.getTarifaDevengada = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.get(url).pipe(tap(function (_) { return console.log("fetched   TarifaDevengada id=" + id); }), catchError(this.handleError("getTarifaDevengada id=" + id)));
    };
    ApiService.prototype.getTarifaDevengadaByMC = function (mc) {
        var url = apiUrl + "/GetByMC/" + mc;
        return this.http.get(url).pipe(tap(function (_) { return console.log("fetched   TarifaDevengada mc=" + mc); }), catchError(this.handleError("getTarifaDevengada mc=" + mc)));
    };
    ApiService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = "operation"; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    };
    ApiService = __decorate([
        Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ApiService);
    return ApiService;
}());
export { ApiService };
//# sourceMappingURL=api.service.js.map