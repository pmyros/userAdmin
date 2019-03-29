var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
var TarifaDevengadaListComponent = /** @class */ (function () {
    function TarifaDevengadaListComponent() {
        this.totalrecords = this.tarifas ? this.tarifas.length : 0;
    }
    TarifaDevengadaListComponent.prototype.ngOnInit = function () {
        this.columns = [
            { field: "fecha", header: "FECHA", display: "table-cell", show: true },
            {
                field: "comisionId",
                header: "COMISION",
                display: "table-cell",
                show: true
            },
            {
                field: "miembroCompensadorCodigo",
                header: "COD_ALYC",
                display: "table-cell",
                show: true
            },
            {
                field: "miembroCompensadorDescripcion",
                header: "DESC_ALYC",
                display: "table-cell",
                show: true
            },
            { field: "cantidad", header: "CANTIDAD", display: "none", show: false }
        ];
    };
    TarifaDevengadaListComponent.prototype.loadLazy = function (event) {
        console.log(event);
        // if (this.tarifas) {
        //   this.datasource = this.tarifas.slice(event.first, event.first + event.rows);
        // }
    };
    TarifaDevengadaListComponent.prototype.toogle = function (col) {
        var obj = this.columns.filter(function (a) { return a.header == col.header; })[0];
        obj.display = obj.display == "none" ? "table-cell" : "none";
        obj.show = obj.display == "none" ? true : false;
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], TarifaDevengadaListComponent.prototype, "tarifas", void 0);
    TarifaDevengadaListComponent = __decorate([
        Component({
            selector: "app-tarifa-devengada-list",
            templateUrl: "./tarifa-devengada-list.component.html",
            styleUrls: ["./tarifa-devengada-list.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], TarifaDevengadaListComponent);
    return TarifaDevengadaListComponent;
}());
export { TarifaDevengadaListComponent };
//# sourceMappingURL=tarifa-devengada-list.component.js.map