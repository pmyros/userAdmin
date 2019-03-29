var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./layout/header/header.component";
import { SideNavListComponent } from "./layout/side-nav-list/side-nav-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModules } from "../shared/material/material.module";
import { PipesModule } from "../pipes/pipes.module";
import { GrowlModule } from "primeng/primeng";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        NgModule({
            declarations: [
                HeaderComponent,
                SideNavListComponent
            ],
            imports: [
                CommonModule,
                BrowserModule,
                RouterModule,
                BrowserAnimationsModule,
                // FormsModule,
                // ReactiveFormsModule,
                HttpClientModule,
                PipesModule,
                MaterialModules,
                GrowlModule,
            ],
            exports: [
                HeaderComponent,
                SideNavListComponent
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=core.module.js.map