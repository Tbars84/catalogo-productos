import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class ProductosServicio {
  private API_URL = environment.baseApi;
  constructor(private _http: HttpClient){}

  obtenerProductos(): Observable<any> {
    return this._http.get<any>(`${this.API_URL}/productos`).pipe(map(res => res))
  }
}