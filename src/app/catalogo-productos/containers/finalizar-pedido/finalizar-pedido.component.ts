import { Component, OnInit } from '@angular/core';
import { ProductosServicio } from '../../services/productos.service';
import { PedidosServicio } from '../../services/pedidos.service';
import {MessageService} from 'primeng/api';
import { ProductoInt } from '../../models/interfaces';

@Component({
  selector: 'finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.scss']
})
export class FinalizarPedidoComponent implements OnInit {
  public listaProductosSeleccionados: ProductoInt[] = []
  constructor(
    private _srvProductos: ProductosServicio,
    private _srvPedidosServicio: PedidosServicio,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.chequeaPersistencia()
  }
  public chequeaPersistencia(){
    if (localStorage.getItem('preorden') !== null) {
      this._srvProductos.obtenerProductosSeleccionados().subscribe((prod) => {
        prod.map(item => {
          this.listaProductosSeleccionados.push(item)
        })
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
  public infoUsuarioPedido(ev){
    if (this.listaProductosSeleccionados.length > 0) {
      const pedido = {
        nombre: ev.nombre,
        fecha: ev.fecha,
        direccion: ev.direccion,
        ciudad: ev.ciudad,
        nuevoPedido: this.listaProductosSeleccionados,
      }
      this._srvPedidosServicio.guardarPedido(pedido).subscribe(
        ()=>{
          this.messageService.add({severity:'success', summary:'Envio de Pedido', detail:'Su envio se ha guardado y está en proceso'});
        },
        (err)=>{
          console.log('error -->' , err);
        }
      )
    } else {
      this.messageService.add({severity:'error', summary:'Error en el Pedido', detail:'Por favor elige los productos que deseas ordenar'});
    }
  }
}
