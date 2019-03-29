import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";
import { TarifaDevengada } from "../../models/tarifa-devengada";
import { MiembroCompensador } from "../../models/miembro-compensador";
import * as moment from 'moment'
import { CuentaCompensacion } from "../../models/cuenta-compensacion";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
const apiUrl = "https://ngnetcoreapi.azurewebsites.net/api/tarifadevengada"; //localhost:5000

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getTarifasDevengadas(): Observable<TarifaDevengada[]> {
    return this.http.get<TarifaDevengada[]>(apiUrl).pipe(
      tap(res => console.log("fetched   TarifasDevengadas")),      
      catchError(this.handleError("getTarifasDevengada", []))
    );
  }

  getMiembrosCompensadores(): Observable<MiembroCompensador[]> {
    const url = `${apiUrl}/GetMiembrosCompensadores/`;
    return this.http.get<MiembroCompensador[]>(url).pipe(
      tap(res => console.log("fetched MCs")),
      catchError(this.handleError("GetMiembrosCompensadores", []))
    );
  }

  getCuentasCompensacionByMC(mc: string): Observable<CuentaCompensacion[]> {
    const url = `${apiUrl}/GetCuentasCompensacionByMC/${mc}`;
    return this.http.get<CuentaCompensacion[]>(url).pipe(
      tap(res => console.log("fetched CIMS")),
      catchError(this.handleError("getCuentasCompensacionByMC", []))
    );
  }

  getTarifaDevengada(id: number): Observable<TarifaDevengada> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<TarifaDevengada>(url).pipe(
      tap(_ => console.log(`fetched   TarifaDevengada id=${id}`)),
      catchError(
        this.handleError<TarifaDevengada>(`getTarifaDevengada id=${id}`)
      )
    );
  }

  getTarifaDevengadaByMC(mc: string): Observable<TarifaDevengada[]> {
    const url = `${apiUrl}/GetByMC/${mc}`;
    return this.http.get<TarifaDevengada[]>(url).pipe(
      tap(_ => console.log(`fetched   TarifaDevengada mc=${mc}`)),
      catchError(
        this.handleError<TarifaDevengada[]>(`getTarifaDevengada mc=${mc}`)
      )
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
