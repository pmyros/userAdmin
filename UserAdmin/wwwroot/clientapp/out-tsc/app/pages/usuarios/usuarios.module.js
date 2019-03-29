var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var UsuariosModule = /** @class */ (function () {
    function UsuariosModule() {
    }
    UsuariosModule = __decorate([
        NgModule({
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
    ], UsuariosModule);
    return UsuariosModule;
}());
export { UsuariosModule };
//# sourceMappingURL=usuarios.module.js.map