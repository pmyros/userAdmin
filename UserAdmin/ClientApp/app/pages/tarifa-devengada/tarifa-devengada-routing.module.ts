import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarifaDevengadaPageComponent } from './components/tarifa-devengada-page/tarifa-devengada-page.component';

const routes: Routes = [{ path: "", component: TarifaDevengadaPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarifaDevengadaRoutingModule { }
