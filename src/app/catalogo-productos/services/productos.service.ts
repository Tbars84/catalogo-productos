import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductoInt } from '../models/interfaces';


@Injectable()
export class ProductosServicio {
  private API_URL = environment.baseApi;
  private LOCAL_API_URL = environment.localApi;
  constructor(private _http: HttpClient){}

  obtenerProductos(): Observable<ProductoInt[]> {
    return this._http.get<ProductoInt[]>(`${this.API_URL}/productos`)
      .pipe(
        map(res => res)
      )
  }
  guardarProductos(param): Observable<ProductoInt[]> {
    return this._http.post<ProductoInt[]>(`${this.LOCAL_API_URL}/preorden` , param)
      .pipe((
        map(resp => resp)
      ))
  }
  obtenerProductosSeleccionados(): Observable<ProductoInt[]> {
    return this._http.get<ProductoInt[]>(`${this.LOCAL_API_URL}/preorden`)
      .pipe(
        map(res => res)
      )
  }
  borrarProductosSeleccionados(id): Observable<ProductoInt> {
    return this._http.delete<ProductoInt>(`http://localhost:3000/preorden/${id}`).pipe(
      map(x => x)
    )
  }

}