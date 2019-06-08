import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// ROUTING
import { AppRoutingModule } from './app-routing.module';
// CONTAINERS
import { FinalizarPedidoComponent } from './components/finalizar-pedido/finalizar-pedido.component';
import { SeleccionProductosComponent } from './components/seleccion-productos/seleccion-productos.component';
import { LandingAppComponent } from './components/landing-app/landing-app.component';

@NgModule({
  declarations : [
    FinalizarPedidoComponent,
    SeleccionProductosComponent,
    LandingAppComponent
  ],
  imports : [
  CommonModule,
  AppRoutingModule,
  ReactiveFormsModule
  ],
  exports : [
    LandingAppComponent
  ],
  providers: [
  ]
})

export class CatProdsModule{}
