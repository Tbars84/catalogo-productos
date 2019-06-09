import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeleccionProductosComponent } from '../components/landing-app/components/seleccion-productos/seleccion-productos.component';
import { FinalizarPedidoComponent } from '../components/landing-app/components/finalizar-pedido/finalizar-pedido.component';

const routes: Routes = [
  { path: '', component: SeleccionProductosComponent },
  { path: 'finaliza-pedido', component: FinalizarPedidoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
