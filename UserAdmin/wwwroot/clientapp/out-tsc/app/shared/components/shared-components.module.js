var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxTableComponent } from "./dx-table/dx-table.component";
import { DxDataGridModule } from "devextreme-angular";
import { ChartComponent } from "./chart/chart.component";
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { TableComponent } from './table/table.component';
import { MaterialModules } from "../material/material.module";
import { PipesModule } from "../../pipes/pipes.module";
var SharedComponentsModule = /** @class */ (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule = __decorate([
        NgModule({
            declarations: [DxTableComponent, ChartComponent, FileUploaderComponent, TableComponent],
            imports: [CommonModule, DxDataGridModule, ChartsModule, MaterialModules, PipesModule],
            exports: [DxTableComponent, ChartComponent, FileUploaderComponent, TableComponent]
        })
    ], SharedComponentsModule);
    return SharedComponentsModule;
}());
export { SharedComponentsModule };
//# sourceMappingURL=shared-components.module.js.map