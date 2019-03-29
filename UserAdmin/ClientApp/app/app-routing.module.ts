import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: 'tarifa-devengada', loadChildren: './pages/tarifa-devengada/tarifa-devengada.module#TarifaDevengadaModule' },
  { path: 'usuarios', loadChildren: './pages/usuarios/usuarios.module#UsuariosModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
  { path: '', redirectTo:"home", pathMatch: 'full' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

