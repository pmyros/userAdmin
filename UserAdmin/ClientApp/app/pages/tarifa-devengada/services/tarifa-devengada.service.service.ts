import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericApiService } from '../../../services/api/genericApi.service';
import { TarifaDevengada } from '../../../models/tarifa-devengada';


@Injectable()
export class TarifaDevengadaService extends GenericApiService<TarifaDevengada> {
  protected basePath: string = "tarifadevengada";
  constructor(http: HttpClient) {
    super(http);
  }

}