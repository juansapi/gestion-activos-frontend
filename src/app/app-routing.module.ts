import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaActivosComponent } from './lista-activos/lista-activos.component';
import { ActualizarActivosComponent } from './actualizar-activos/actualizar-activos.component';
import { RegistrarActivosComponent } from './registrar-activos/registrar-activos.component';
import { ListaMovimientosComponent } from './lista-movimientos/lista-movimientos.component';

const routes: Routes = [
  {path: 'activos', component:ListaActivosComponent},
  {path: '', redirectTo:'activos',pathMatch:'full'},
  {path: 'registrar-activos', component:RegistrarActivosComponent},
  {path : 'actualizar-activos/:id',component : ActualizarActivosComponent},
  {path: 'movimientos', component:ListaMovimientosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
