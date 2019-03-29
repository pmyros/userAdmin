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
import { HttpClient } from "@angular/common/http";
import { SignalRService } from "../../../services/signal-r.service";
var ChartComponent = /** @class */ (function () {
    function ChartComponent(http, signalRService) {
        var _this = this;
        this.http = http;
        this.signalRService = signalRService;
        this.chartOptions = {
            scaleShowVerticalLines: true,
            responsive: true,
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        };
        this.chartLabels = ["Cantidad de consultas de usuarios a AP6"];
        this.chartType = "bar";
        this.chartLegend = true;
        this.colors = [
            { backgroundColor: "#5491DA" },
            { backgroundColor: "#E74C3C" },
            { backgroundColor: "#82E0AA" },
            { backgroundColor: "#E5E7E9" }
        ];
        this.startHttpRequest = function () {
            _this.http.get("https://ngnetcoreapi.azurewebsites.net/api/chart/getchart").subscribe(function (res) {
                console.log(res);
            });
        };
    }
    ChartComponent.prototype.ngOnInit = function () {
        this.signalRService.startConnection();
        this.signalRService.addTransferChartDataListener();
        this.startHttpRequest();
    };
    ChartComponent = __decorate([
        Component({
            selector: "app-chart",
            templateUrl: "./chart.component.html",
            styleUrls: ["./chart.component.css"]
        }),
        __metadata("design:paramtypes", [HttpClient,
            SignalRService])
    ], ChartComponent);
    return ChartComponent;
}());
export { ChartComponent };
//# sourceMappingURL=chart.component.js.map