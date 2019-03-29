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

@NgModule({
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
export class TarifaDevengadaModule {}
