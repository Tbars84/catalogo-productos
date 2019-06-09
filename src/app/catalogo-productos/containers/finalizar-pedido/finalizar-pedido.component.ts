import { Component, OnInit } from '@angular/core';
import { ProductosServicio } from '../../services/productos.service';
import {MessageService} from 'primeng/api';
import { ProductoInt } from '../../models/interfaces';

@Component({
  selector: 'finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.scss']
})
export class FinalizarPedidoComponent implements OnInit {
  public productosSeleccionados = true;
  public listaProductosSeleccionados: ProductoInt[] = []
  constructor(
    private _srvProductos: ProductosServicio,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.chequeaPersistencia()
  }
  public chequeaPersistencia(){
    if (localStorage.getItem('preorden') !== null) {
      this.productosSeleccionados = false;
      this._srvProductos.obtenerProductosSeleccionados().subscribe((prod) => {
        prod.map(item => {
          this.listaProductosSeleccionados.push(item)
        })
        console.log(this.listaProductosSeleccionados);
      })
    }
  }
  public eliminaProductoPedido(ev){
    const prodsStorage = JSON.parse(localStorage.getItem('preorden'))
    const removerProd = prodsStorage.filter((prod) => prod.idProducto !== ev)
    localStorage.setItem('preorden',JSON.stringify(removerProd))
    this._srvProductos.borrarProductosSeleccionados(ev).subscribe(
      () => {
        this.listaProductosSeleccionados =this.listaProductosSeleccionados.filter((items) => items.id !== ev);
      },
      (err) => {
          console.log('error -->', err);
      }
    )
  }
}
