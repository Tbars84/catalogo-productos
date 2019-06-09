import { Component, OnInit } from '@angular/core';
import { ProductosServicio } from '../../services/productos.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'seleccion-productos',
  templateUrl: './seleccion-productos.component.html',
  styleUrls: ['./seleccion-productos.component.scss']
})
export class SeleccionProductosComponent implements OnInit {
  public productosArr = [];
  constructor(private _srvProductos: ProductosServicio) { }

  ngOnInit() {
    this._srvProductos.obtenerProductos().subscribe(prod =>{
      prod.map(item => {
        this.productosArr.push(item)
      })
    })
  }

}
