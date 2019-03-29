var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";
import { DxDataGridComponent } from "devextreme-angular";
import { locale, loadMessages } from "devextreme/localization";
import * as esMessages from "../../../../assets/i18n/devexpress/es";
var DxTableComponent = /** @class */ (function () {
    function DxTableComponent() {
        this.rowDeleted = new EventEmitter();
        this.events = [];
        var lang = sessionStorage.getItem("LANG");
        if (lang != "en")
            loadMessages(esMessages);
        locale(lang);
    }
    DxTableComponent.prototype.ngOnInit = function () { };
    DxTableComponent.prototype.ngAfterViewInit = function () { };
    DxTableComponent.prototype.onRowRemoving = function (event) {
        console.log(event);
    };
    DxTableComponent.prototype.onRowRemoved = function (event) {
        this.rowDeleted.emit(event.data);
    };
    DxTableComponent.prototype.clearEvents = function () {
        this.events = [];
    };
    __decorate([
        ViewChild("grid"),
        __metadata("design:type", DxDataGridComponent)
    ], DxTableComponent.prototype, "dataGrid", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DxTableComponent.prototype, "columns", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DxTableComponent.prototype, "datasource", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DxTableComponent.prototype, "filename", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], DxTableComponent.prototype, "rowDeleted", void 0);
    DxTableComponent = __decorate([
        Component({
            selector: "app-dx-table",
            templateUrl: "./dx-table.component.html",
            styleUrls: ["./dx-table.component.css"],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], DxTableComponent);
    return DxTableComponent;
}());
export { DxTableComponent };
//# sourceMappingURL=dx-table.component.js.map