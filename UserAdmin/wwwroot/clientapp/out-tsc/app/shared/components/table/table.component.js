var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignalRService } from '../../../services/signal-r.service';
var TableComponent = /** @class */ (function () {
    function TableComponent(http, signalRService) {
        var _this = this;
        this.http = http;
        this.signalRService = signalRService;
        this.startHttpRequest = function () {
            _this.http.get("https://ngnetcoreapi.azurewebsites.net/api/chart/gettable").subscribe(function (res) {
                console.log(res);
            });
        };
    }
    TableComponent.prototype.ngOnInit = function () {
        this.signalRService.startConnection();
        this.signalRService.addTransferTableDataListener();
        this.startHttpRequest();
    };
    TableComponent = __decorate([
        Component({
            selector: 'app-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient,
            SignalRService])
    ], TableComponent);
    return TableComponent;
}());
export { TableComponent };
//# sourceMappingURL=table.component.js.map