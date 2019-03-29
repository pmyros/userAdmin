import { Component, OnInit, Input } from "@angular/core";
import { TarifaDevengada } from "../../../../models/tarifa-devengada";

@Component({
  selector: "app-tarifa-devengada-list",
  templateUrl: "./tarifa-devengada-list.component.html",
  styleUrls: ["./tarifa-devengada-list.component.css"]
})
export class TarifaDevengadaListComponent implements OnInit {
  @Input() tarifas: TarifaDevengada[];
  datasource: TarifaDevengada[];
  columns: any[];
  totalrecords: number = this.tarifas ? this.tarifas.length : 0;
  constructor() {}

  ngOnInit() {
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
  }

  loadLazy(event) {
    console.log(event);
    // if (this.tarifas) {
    //   this.datasource = this.tarifas.slice(event.first, event.first + event.rows);
    // }
  }
  toogle(col) {    
    var obj = this.columns.filter(a => a.header == col.header)[0];
    obj.display = obj.display == "none" ? "table-cell" : "none";
    obj.show = obj.display == "none" ? true : false;
  }
  
}
