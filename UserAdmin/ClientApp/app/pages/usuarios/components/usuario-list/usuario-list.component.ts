import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Usuario } from "../../../../models/usuario";
import { TranslatePipe } from "../../../../pipes/translate.pipe";

@Component({
  selector: "app-usuario-list",
  templateUrl: "./usuario-list.component.html",
  styleUrls: ["./usuario-list.component.css"]
})
export class UsuarioListComponent implements OnInit {
  @Input() usuarios: Usuario[];
  @Output() rowDeleted = new EventEmitter();
  columns: any[];
  filename = "Usuarios";
  
  constructor(private _t: TranslatePipe) {
    
  }

  translate(text) {
    return this._t.transform(text);
  }

  onRowDeleted(event)
  {
    this.rowDeleted.emit(event);
  }

  ngOnInit() {
    this.columns = [
      {
        dataField: "nombre",
        caption: this.translate("NOMBRE"),
        dataType: "string"
      },
      {
        dataField: "email",
        caption: this.translate("EMAIL"),
        dataType: "string"
      },
      {
        dataField: "mc",
        caption: this.translate("ALYC"),
        dataType: "string"
      },
      {
        dataField: "cim",
        caption: this.translate("CIM"),
        dataType: "string"
      }
    ];
  }
}
