var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, Input } from "@angular/core";
import { DxDataGridComponent } from "devextreme-angular";
import { TranslatePipe } from "../../../../pipes/translate.pipe";
//import it to change locale and load localization messages
import { locale, loadMessages } from "devextreme/localization";
import * as esMessages from "../../../../../assets/i18n/devexpress/es";
var TarifaDevengadaListDxComponent = /** @class */ (function () {
    function TarifaDevengadaListDxComponent(_t) {
        this._t = _t;
        this.totalrecords = this.tarifas ? this.tarifas.length : 0;
        var lang = sessionStorage.getItem("LANG");
        if (lang != "en")
            loadMessages(esMessages);
        locale(lang);
    }
    TarifaDevengadaListDxComponent.prototype.ngOnInit = function () {
        this.columns = [
            {
                dataField: "fecha",
                caption: this.translate("FECHA"),
                dataType: "date"
            },
            {
                dataField: "comisionId",
                caption: this.translate("COMISION"),
                dataType: "string",
                visible: false
            },
            {
                dataField: "miembroCompensadorCodigo",
                caption: this.translate("COD_ALYC"),
                dataType: "string"
            },
            {
                dataField: "miembroCompensadorDescripcion",
                caption: this.translate("DESC_ALYC"),
                dataType: "string"
            },
            {
                dataField: "cantidad",
                caption: this.translate("CANTIDAD"),
                dataType: "number",
            }
        ];
    };
    TarifaDevengadaListDxComponent.prototype.ngAfterViewInit = function () {
    };
    TarifaDevengadaListDxComponent.prototype.translate = function (text) {
        return this._t.transform(text);
    };
    __decorate([
        ViewChild("grid"),
        __metadata("design:type", DxDataGridComponent)
    ], TarifaDevengadaListDxComponent.prototype, "dataGrid", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], TarifaDevengadaListDxComponent.prototype, "tarifas", void 0);
    TarifaDevengadaListDxComponent = __decorate([
        Component({
            selector: "app-tarifa-devengada-list-dx",
            templateUrl: "./tarifa-devengada-list-dx.component.html",
            styleUrls: ["./tarifa-devengada-list-dx.component.css"]
        }),
        __metadata("design:paramtypes", [TranslatePipe])
    ], TarifaDevengadaListDxComponent);
    return TarifaDevengadaListDxComponent;
}());
export { TarifaDevengadaListDxComponent };
//# sourceMappingURL=tarifa-devengada-list-dx.component.js.map