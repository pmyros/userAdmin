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

@NgModule({
  declarations: [DxTableComponent, ChartComponent, FileUploaderComponent, TableComponent],
  imports: [CommonModule, DxDataGridModule, ChartsModule, MaterialModules,PipesModule],
  exports: [DxTableComponent, ChartComponent, FileUploaderComponent,TableComponent]
})
export class SharedComponentsModule {}
