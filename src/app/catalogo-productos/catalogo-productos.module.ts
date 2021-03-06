import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from './commons/primeNg.module';
import { AppRoutingModule } from './commons/app-routing.module';
// API SERVICIOS
import { ProductosServicio } from './services/productos.service';
import { PedidosServicio } from './services/pedidos.service';
import { MessageService } from 'primeng/api';
// COMPONENTS
import { LandingAppComponent } from './containers/landing-app/landing-app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductoCardComponent } from './components/producto-card/producto-card.component';
import { SeleccionProductosComponent } from './containers/seleccion-productos/seleccion-productos.component';
import { FinalizarPedidoComponent } from './containers/finalizar-pedido/finalizar-pedido.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { TablaPedidosSeleccionadosComponent } from './components/tabla-pedidos-seleccionados/tabla-pedidos-seleccionados.component';

@NgModule({
  declarations : [
    FinalizarPedidoComponent,
    SeleccionProductosComponent,
    LandingAppComponent,
    ProductoCardComponent,
    MenuComponent,
    FormularioUsuarioComponent,
    TablaPedidosSeleccionadosComponent
  ],
  imports : [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PrimeNgModule
  ],
  exports : [
    LandingAppComponent
  ],
  providers: [
    ProductosServicio,
    PedidosServicio,
    MessageService
  ]
})

export class CatProdsModule{}
