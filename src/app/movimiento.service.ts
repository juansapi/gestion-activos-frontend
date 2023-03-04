import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movimiento } from './movimiento';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  private baseURL ="http://localhost:8080/api/v1/movimientos"; 

  constructor(private httpClient : HttpClient) { }

  obtenerListaMovimiento():Observable<Movimiento[]>{
    return this.httpClient.get<Movimiento[]>(`${this.baseURL}`);
  }
  registrarMovimiento(activo:Movimiento) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, activo);
  }
  obtenerMovimientoPorId(id:number):Observable<Movimiento>{
    return this.httpClient.get<Movimiento>(`${this.baseURL}/${id}`);
  }
 
}
