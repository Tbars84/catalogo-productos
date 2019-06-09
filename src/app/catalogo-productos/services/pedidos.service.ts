import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PedidosServicio {
  private LOCAL_API_URL = environment.localApi;
  constructor(private _http: HttpClient){}

  guardarPedido(param): Observable<any[]> {
    return this._http.post<any[]>(`${this.LOCAL_API_URL}/pedidos` , param)
      .pipe((
        map(resp => resp)
      ))
  }
}