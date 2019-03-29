import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../../../services/api/api.service";
import { TarifaDevengada } from "../../../../models/tarifa-devengada";
import { MiembroCompensador } from "../../../../models/miembro-compensador";
import { TarifaDevengadaService } from "../../services/tarifa-devengada.service.service";

@Component({
  selector: "app-tarifa-devengada-page",
  templateUrl: "./tarifa-devengada-page.component.html",
  styleUrls: ["./tarifa-devengada-page.component.css"]
})
export class TarifaDevengadaPageComponent implements OnInit {
  data: any; 
  mcs: MiembroCompensador[] = [];
  isLoadingDataResults = true;
  isLoadingMcsResults = true;
    url = "https://ngnetcoreapi.azurewebsites.net/api/tarifadevengada";
  constructor(private api: ApiService, private _ts: TarifaDevengadaService) {
    
  }

  ngOnInit() {
    this.getMcs();
    this.getAllDevengadas();
  }

  getAllDevengadas() {
    this.isLoadingDataResults = true;
    this._ts.getAll().subscribe(
      res => {
        this.data = res;
        this.isLoadingDataResults = false;
      },
      err => {
        console.log(err);
        this.isLoadingDataResults = false;
      }
    );
  }

  GetDevengadasByMC(mc) {
    this.isLoadingDataResults = true;
    this._ts.getByMC(mc).subscribe(
      res => {
        this.data = res;
        this.isLoadingDataResults = false;
      },
      err => {
        console.log(err);
        this.isLoadingDataResults = false;
      }
    );
  }

  onMcSelected(mc) {
    this.isLoadingDataResults = true;
    if (mc == 0) {
      this.getAllDevengadas();
    } else {
      this.GetDevengadasByMC(mc);
    }
  }

  getMcs() {
    this.api.getMiembrosCompensadores().subscribe(
      res => {
        this.mcs = res;
        this.isLoadingMcsResults = false;
      },
      err => {
        console.log(err);
        this.isLoadingMcsResults = false;
      }
    );
  }
}
