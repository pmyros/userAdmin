var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
var httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
};
var apiUrl = "https://ngnetcoreapi.azurewebsites.net/api"; //localhost:5000
var GenericApiService = /** @class */ (function () {
    function GenericApiService(http) {
        this.http = http;
    }
    GenericApiService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(apiUrl + "/" + this.basePath + "/GetAll").pipe(tap(function (res) { return console.log("fetched GetAll" + _this.basePath); }), catchError(this.handleError("GetAll", [])));
    };
    GenericApiService.prototype.getByMC = function (id) {
        var _this = this;
        return this.http.get(apiUrl + "/" + this.basePath + "/GetByMC/" + id).pipe(tap(function (res) { return console.log("fetched GetByMC" + _this.basePath); }), catchError(this.handleError("GetByMC", [])));
    };
    GenericApiService.prototype.create = function (item) {
        return this.http.post(apiUrl + "/" + this.basePath + "/Create", item).pipe(tap(function (data) {
            console.log(data);
            data;
        }), catchError(this.handleError("Create", null)));
    };
    GenericApiService.prototype.delete = function (id) {
        return this.http.delete(apiUrl + "/" + this.basePath + "/Delete/" + id).pipe(tap(function (data) {
            console.log(data);
        }), catchError(this.handleError("Delete", null)));
    };
    GenericApiService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = "operation"; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    };
    GenericApiService = __decorate([
        Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], GenericApiService);
    return GenericApiService;
}());
export { GenericApiService };
//# sourceMappingURL=genericApi.service.js.map