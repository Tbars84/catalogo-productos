import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'Catalogo',
          icon: 'pi  pi-th-large',
          routerLink: '/'
      },
      {
          label: 'Ir a Carrito',
          icon: 'pi  pi-shopping-cart',
          routerLink: 'finaliza-pedido'
      }
  ];
  }

}
