import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeleccionProductosComponent } from '../containers/seleccion-productos/seleccion-productos.component';
import { FinalizarPedidoComponent } from '../containers/finalizar-pedido/finalizar-pedido.component';

const routes: Routes = [
  { path: '', component: SeleccionProductosComponent },
  { path: 'finaliza-pedido', component: FinalizarPedidoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
