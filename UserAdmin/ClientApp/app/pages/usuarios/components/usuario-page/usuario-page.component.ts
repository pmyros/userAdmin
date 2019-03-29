import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../../../models/usuario";
import { UsuariosService } from "../../services/usuarios.service";

@Component({
  selector: "app-usuario-page",
  templateUrl: "./usuario-page.component.html",
  styleUrls: ["./usuario-page.component.css"]
})
export class UsuarioPageComponent implements OnInit {
  usuarios: Usuario[] = [];
  isLoadingDataResults = false;
  constructor(private _us: UsuariosService) {}

  ngOnInit() {
    //get usuarios
    this.getAllUsuarios();
  }

  reloadTable(event) {
    this.getAllUsuarios();
  }

  onRowDeleted(event) {
    this._us.delete(event.usuarioID).subscribe(res => {
      console.log(res);
    });
  }

  getAllUsuarios() {
    this.isLoadingDataResults = true;
    this._us.getAll().subscribe(
      res => {
        this.usuarios = res;
        this.isLoadingDataResults = false;
      },
      err => {
        console.log(err);
        this.isLoadingDataResults = false;
      }
    );
  }
}
