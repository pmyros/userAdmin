var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { TarifaDevengadaRoutingModule } from "./tarifa-devengada-routing.module";
import { TableModule } from "primeng/table";
import { TarifaDevengadaPageComponent } from "./components/tarifa-devengada-page/tarifa-devengada-page.component";
import { TarifaDevengadaListComponent } from "./components/tarifa-devengada-list/tarifa-devengada-list.component";
import { TarifaDevengadaFormComponent } from "./components/tarifa-devengada-form/tarifa-devengada-form.component";
import { MaterialModules } from "../../shared/material/material.module";
import { TarifaDevengadaService } from "./services/tarifa-devengada.service.service";
import { TarifaDevengadaListDxComponent } from "./components/tarifa-devengada-list-dx/tarifa-devengada-list-dx.component";
//import it to change locale and load localization messages
import { locale } from "devextreme/localization";
import "devextreme-intl";
import { PipesModule } from "../../pipes/pipes.module";
import { TranslatePipe } from "../../pipes/translate.pipe";
locale(sessionStorage.getItem("LANG"));
import { SharedComponentsModule } from "../../shared/components/shared-components.module";
var TarifaDevengadaModule = /** @class */ (function () {
    function TarifaDevengadaModule() {
    }
    TarifaDevengadaModule = __decorate([
        NgModule({
            declarations: [
                TarifaDevengadaPageComponent,
                TarifaDevengadaListComponent,
                TarifaDevengadaFormComponent,
                TarifaDevengadaListDxComponent
            ],
            imports: [
                CommonModule,
                TarifaDevengadaRoutingModule,
                ReactiveFormsModule,
                MaterialModules,
                TableModule,
                SharedComponentsModule,
                PipesModule
            ],
            exports: [
                TarifaDevengadaPageComponent,
                TarifaDevengadaListComponent,
                TarifaDevengadaFormComponent,
                TarifaDevengadaListDxComponent
            ],
            providers: [TarifaDevengadaService, TranslatePipe]
        })
    ], TarifaDevengadaModule);
    return TarifaDevengadaModule;
}());
export { TarifaDevengadaModule };
//# sourceMappingURL=tarifa-devengada.module.js.map