var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./components/home-page/home.component";
import { WidgetComponent } from "./components/widget/widget.component";
import { MaterialModules } from "../../shared/material/material.module";
import { PipesModule } from "../../pipes/pipes.module";
import { SharedComponentsModule } from "../../shared/components/shared-components.module";
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        NgModule({
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
    ], HomeModule);
    return HomeModule;
}());
export { HomeModule };
//# sourceMappingURL=home.module.js.map