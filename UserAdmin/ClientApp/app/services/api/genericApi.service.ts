import { Observable, of } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
const apiUrl = "https://ngnetcoreapi.azurewebsites.net/api"; //localhost:5000

@Injectable({
  providedIn: "root"
})
export abstract class GenericApiService<T> {
  protected abstract basePath: string;
  constructor(private http: HttpClient) {}

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${apiUrl}/${this.basePath}/GetAll`).pipe(
      tap(res => console.log("fetched GetAll" + this.basePath)),
      catchError(this.handleError("GetAll", []))
    );
  }

  getByMC(id: number): Observable<T[]> {
    return this.http.get<T[]>(`${apiUrl}/${this.basePath}/GetByMC/${id}`).pipe(
      tap(res => console.log("fetched GetByMC" + this.basePath)),
      catchError(this.handleError("GetByMC", []))
    );
  }

  public create(item: T): Observable<T> {
    return this.http.post<T>(`${apiUrl}/${this.basePath}/Create`, item).pipe(
      tap(data => {
        console.log(data);
        data as T;
      }),
      catchError(this.handleError("Create", null))
    );
  }

  delete(id: number) {
    
    return this.http.delete(`${apiUrl}/${this.basePath}/Delete/${id}`).pipe(
      tap(data => {
        console.log(data);       
      }),
      catchError(this.handleError("Delete", null))
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
