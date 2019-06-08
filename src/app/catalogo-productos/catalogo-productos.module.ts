import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// ROUTING
import { AppRoutingModule } from './app-routing.module';
// CONTAINERS
import { FinalizarPedidoComponent } from './components/finalizar-pedido/finalizar-pedido.component';
import { SeleccionProductosComponent } from './components/seleccion-productos/seleccion-productos.component';
import { LandingAppComponent } from './components/landing-app/landing-app.component';
import { ProductoCardComponent } from './components/seleccion-productos/components/producto-card/producto-card.component';
// PRIMENG COMPONENTS
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {OverlayPanelModule} from 'primeng/overlaypanel';

@NgModule({
  declarations : [
    FinalizarPedidoComponent,
    SeleccionProductosComponent,
    LandingAppComponent,
    ProductoCardComponent
  ],
  imports : [
  CommonModule,
  AppRoutingModule,
  ReactiveFormsModule,
  CardModule,
  ButtonModule,
  OverlayPanelModule
  ],
  exports : [
    LandingAppComponent
  ],
  providers: [
  ]
})

export class CatProdsModule{}
