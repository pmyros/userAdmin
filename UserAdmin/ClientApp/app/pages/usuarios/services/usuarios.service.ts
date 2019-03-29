import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericApiService } from '../../../services/api/genericApi.service';
import { Usuario } from '../../../models/usuario';


@Injectable()
export class UsuariosService extends GenericApiService<Usuario> {
  protected basePath: string = "usuarios";
  constructor(http: HttpClient) {
    super(http);
  }
}