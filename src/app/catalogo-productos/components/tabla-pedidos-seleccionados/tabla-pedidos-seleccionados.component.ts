import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pedidos-seleccionados',
  templateUrl: './tabla-pedidos-seleccionados.component.html',
  styleUrls: ['./tabla-pedidos-seleccionados.component.scss']
})
export class TablaPedidosSeleccionadosComponent implements OnInit {
  @Input() tablaProdsSeleccionados;
  @Output() eliminaProductoPedido = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  public eliminaProd(prod){
    this.eliminaProductoPedido.emit(prod.idProducto)
  }
}
