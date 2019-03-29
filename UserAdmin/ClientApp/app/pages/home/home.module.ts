import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./components/home-page/home.component";
import { WidgetComponent } from "./components/widget/widget.component";

import { MaterialModules } from "../../shared/material/material.module";
import { PipesModule } from "../../pipes/pipes.module";
import { SharedComponentsModule } from "../../shared/components/shared-components.module";

@NgModule({
  declarations: [HomeComponent, WidgetComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModules,
    PipesModule,
    SharedComponentsModule
  ],
  exports: [HomeComponent, WidgetComponent]
})
export class HomeModule {}
