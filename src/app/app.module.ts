import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ListaActivosComponent } from './lista-activos/lista-activos.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarActivosComponent } from './registrar-activos/registrar-activos.component';
import { ActualizarActivosComponent } from './actualizar-activos/actualizar-activos.component';
import { ListaMovimientosComponent } from './lista-movimientos/lista-movimientos.component';
import { RegistrarMovimientosComponent } from './registrar-movimientos/registrar-movimientos.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistroComponent,
    ListaActivosComponent,
    RegistrarActivosComponent,
    ActualizarActivosComponent,
    ListaMovimientosComponent,
    RegistrarMovimientosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
