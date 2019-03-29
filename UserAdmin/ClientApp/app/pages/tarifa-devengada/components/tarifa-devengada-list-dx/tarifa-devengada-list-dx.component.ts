import { Component, ViewChild, OnInit, Input } from "@angular/core";
import { DxDataGridComponent } from "devextreme-angular";
import { TarifaDevengada } from "../../../../models/tarifa-devengada";
import { TranslatePipe } from "../../../../pipes/translate.pipe";

//import it to change locale and load localization messages
import { locale, loadMessages } from "devextreme/localization";

import * as esMessages from "../../../../../assets/i18n/devexpress/es";

@Component({
  selector: "app-tarifa-devengada-list-dx",
  templateUrl: "./tarifa-devengada-list-dx.component.html",
  styleUrls: ["./tarifa-devengada-list-dx.component.css"]
})
export class TarifaDevengadaListDxComponent implements OnInit {
  @ViewChild("grid") dataGrid: DxDataGridComponent;
  @Input() tarifas: TarifaDevengada[];
  columns: any[];
  hiddenColumns: any[];
  totalrecords: number = this.tarifas ? this.tarifas.length : 0;

  constructor(private _t: TranslatePipe) {
    const lang = sessionStorage.getItem("LANG");
    if (lang != "en") loadMessages(esMessages);
    locale(lang);
  }

  ngOnInit() {
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
        //visible: false,
        //format: "{ style: 'currency', currency: 'ARS', minimumFractionDigits: 2 }"
      }
    ];
  
  }

  ngAfterViewInit() {
    
  }  

  translate(text) {
    return this._t.transform(text);
  }
}
