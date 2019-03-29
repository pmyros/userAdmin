var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID, APP_INITIALIZER } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es";
registerLocaleData(localeEs, "es");
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "./pages/home/home.module";
import { MaterialModules } from "./shared/material/material.module";
import { TranslateService } from "./services/translate/translate.service";
import { SharedComponentsModule } from "./shared/components/shared-components.module";
import { CoreModule } from "./core/core.module";
import { PipesModule } from "./pipes/pipes.module";
export function setupTranslateFactory(service) {
    return function () { return service.use("es"); };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                CoreModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                PipesModule,
                MaterialModules,
                SharedComponentsModule,
                HomeModule,
            ],
            providers: [
                { provide: LOCALE_ID, useValue: "es-AR" },
                TranslateService,
                {
                    provide: APP_INITIALIZER,
                    useFactory: setupTranslateFactory,
                    deps: [TranslateService],
                    multi: true
                }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map