import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { ProductosServicio } from '../../services/productos.service';
import { ProductoInt } from '../../models/interfaces';

@Component({
  selector: 'seleccion-productos',
  templateUrl: './seleccion-productos.component.html',
  styleUrls: ['./seleccion-productos.component.scss']
})
export class SeleccionProductosComponent implements OnInit {
  public productosArr: ProductoInt[]= [];
  public nuevoProd = []
  constructor(
    private _srvProductos: ProductosServicio,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this._srvProductos.obtenerProductos().subscribe(prod =>{
      prod.map(item => {
        this.productosArr.push(item)
      })
    })
    this.chequeaPersistencia();
  }
  public agregaAcarrito(ev){
    if (this.nuevoProd.find(prod => prod.idProducto == ev )) {
      this.messageService.add({severity:'warn', summary:'Agrega al Carrito', detail:'Este producto ya esta agregado'});      
    }else {
      this.nuevoProd.push(this.productosArr.find(prod => prod.idProducto == ev ));
      this.messageService.add({severity:'success', summary:'Agrega al Carrito', detail:'Producto agregado con exito'});
      localStorage.setItem('preorden' , JSON.stringify(this.nuevoProd))
    }
  }
  public chequeaPersistencia(){
    if (localStorage.getItem('preorden') !== null) {
      this.messageService.add({severity:'warn', summary:'Agrega al Carrito', detail:'Una orden ya esta en proceso'});
      this.nuevoProd = JSON.parse(localStorage.getItem('preorden'))
    }
  }
}
