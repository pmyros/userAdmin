import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsuariosRoutingModule } from "./usuarios-routing.module";

import { MaterialModules } from "../../shared/material/material.module";
import { PipesModule } from "../../pipes/pipes.module";
import { UsuarioFormComponent } from "./components/usuario-form/usuario-form.component";
import { UsuarioListComponent } from "./components/usuario-list/usuario-list.component";
import { UsuarioPageComponent } from "./components/usuario-page/usuario-page.component";
import { ReactiveFormsModule } from "@angular/forms";

import { SharedComponentsModule } from "../../shared/components/shared-components.module";
import { UsuariosService } from "./services/usuarios.service";
import { TranslatePipe } from "../../pipes/translate.pipe";

@NgModule({
  declarations: [
    UsuarioFormComponent,
    UsuarioListComponent,
    UsuarioPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsuariosRoutingModule,
    MaterialModules,
    SharedComponentsModule,
    PipesModule
  ],
  exports: [UsuarioFormComponent, UsuarioListComponent, UsuarioPageComponent],
  providers: [UsuariosService, TranslatePipe]
})
export class UsuariosModule {}
