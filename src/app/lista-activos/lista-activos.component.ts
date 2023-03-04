import { Activo } from './../activo';
import { Component, OnInit } from '@angular/core';
import { ActivoService } from '../activo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-activos',
  templateUrl: './lista-activos.component.html',
  styleUrls: ['./lista-activos.component.css']
})
export class ListaActivosComponent implements OnInit{

  activos:Activo[];

  constructor(private activoServicio:ActivoService , private router:Router) {}

  ngOnInit(): void{
    this.obtenerActivos();
   }

   private obtenerActivos(){
    this.activoServicio.obtenerListaActivo().subscribe(dato =>{
      this.activos = dato;
    });
  }
  actualizarActivo(id:number){
    this.router.navigate(['actualizar-empleado', id]);
  }

}
