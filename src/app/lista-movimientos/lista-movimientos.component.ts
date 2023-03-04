import { Movimiento } from './../movimiento';
import { Component, OnInit } from '@angular/core';
import { MovimientoService } from '../movimiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-movimientos',
  templateUrl: './lista-movimientos.component.html',
  styleUrls: ['./lista-movimientos.component.css']
})
export class ListaMovimientosComponent {

  movimientos:Movimiento[];

  constructor(private movimientoServicio:MovimientoService , private router:Router) {}

  ngOnInit(): void{
    this.obtenerActivos();
   }

   private obtenerActivos(){
    this.movimientoServicio.obtenerListaMovimiento().subscribe(dato =>{
      this.movimientos = dato;
    });
  }
  actualizarActivo(id:number){
    this.router.navigate(['actualizar-empleado', id]);
  }

}
