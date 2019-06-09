import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '@commonsModules/primeNg.module';
import { AppRoutingModule } from '@commonsModules/app-routing.module';
// API SERVICIOS
import { ProductosServicio } from './services/productos.service';

// COMPONENTS
import { LandingAppComponent } from './components/landing-app/landing-app.component';
import { MenuComponent } from '@childComponents/menu/menu.component';
import { ProductoCardComponent } from '@childComponents/seleccion-productos/components/producto-card/producto-card.component';
import { SeleccionProductosComponent } from '@childComponents/seleccion-productos/seleccion-productos.component';
import { FinalizarPedidoComponent } from '@childComponents/finalizar-pedido/finalizar-pedido.component';
import { FormularioUsuarioComponent } from '@childComponents/finalizar-pedido/components/formulario-usuario/formulario-usuario.component';
import { TablaPedidosSeleccionadosComponent } from '@childComponents/finalizar-pedido/components/tabla-pedidos-seleccionados/tabla-pedidos-seleccionados.component';


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
    ProductosServicio
  ]
})

export class CatProdsModule{}
