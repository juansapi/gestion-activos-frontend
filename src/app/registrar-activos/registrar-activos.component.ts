import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activo } from '../activo';
import { ActivoService } from '../activo.service';

@Component({
  selector: 'app-registrar-activos',
  templateUrl: './registrar-activos.component.html',
  styleUrls: ['./registrar-activos.component.css']
})
export class RegistrarActivosComponent implements OnInit{

  activo : Activo = new Activo();
  
  constructor(private activoServicio:ActivoService, private router:Router){}

  ngOnInit(): void {
    
  }

  guardarActivo(){
    this.activoServicio.registrarActivo(this.activo).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeEmpleados();

    }, error => console.log(error));
  }

  irALaListaDeEmpleados(){
    this.router.navigate(['/empleados']);
  }

  onSubmit(){
    this.guardarActivo();
  }

}
