var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@angular/core";
import * as signalR from "@aspnet/signalr";
var SignalRService = /** @class */ (function () {
    function SignalRService() {
        var _this = this;
        this.msgs = [];
        this.startConnection = function () {
            _this.hubConnection = new signalR.HubConnectionBuilder()
                .withUrl("https://ngnetcoreapi.azurewebsites.net/chart")
                .build();
            _this.hubConnection
                .start()
                .then(function () { return console.log("Connection started"); })
                .catch(function (err) { return console.log("Error while starting connection: " + err); });
        };
        this.startMessageConnection = function () {
            _this.messagesHubConnection = new signalR.HubConnectionBuilder()
                .withUrl("https://ngnetcoreapi.azurewebsites.net/notify")
                .build();
            _this.messagesHubConnection
                .start()
                .then(function () { return console.log("Connection notify started"); })
                .catch(function (err) { return console.log("Error while starting connection: " + err); });
        };
        this.addTransferChartDataListener = function () {
            _this.hubConnection.on("transferchartdata", function (data) {
                _this.data = data;
            });
        };
        this.addTransferTableDataListener = function () {
            _this.hubConnection.on("transfertabledata", function (data) {
                _this.tableData = data;
            });
        };
        this.startListeningMessages = function () {
            _this.messagesHubConnection.on("BroadcastMessage", function (type, payload) {
                console.log(type);
                _this.msgs.push({ severity: type, summary: payload });
            });
        };
    }
    SignalRService = __decorate([
        Injectable({
            providedIn: "root"
        })
    ], SignalRService);
    return SignalRService;
}());
export { SignalRService };
//# sourceMappingURL=signal-r.service.js.map