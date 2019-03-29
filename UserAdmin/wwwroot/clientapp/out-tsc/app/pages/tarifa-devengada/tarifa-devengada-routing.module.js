var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TarifaDevengadaPageComponent } from './components/tarifa-devengada-page/tarifa-devengada-page.component';
var routes = [{ path: "", component: TarifaDevengadaPageComponent }];
var TarifaDevengadaRoutingModule = /** @class */ (function () {
    function TarifaDevengadaRoutingModule() {
    }
    TarifaDevengadaRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], TarifaDevengadaRoutingModule);
    return TarifaDevengadaRoutingModule;
}());
export { TarifaDevengadaRoutingModule };
//# sourceMappingURL=tarifa-devengada-routing.module.js.map