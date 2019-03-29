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

@NgModule({
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
export class CoreModule {}
