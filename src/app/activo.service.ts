import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activo } from './activo';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {

  private baseURL ="http://localhost:8080/api/v1/activos"; 

  constructor(private httpClient : HttpClient) { }

  obtenerListaActivo():Observable<Activo[]>{
    return this.httpClient.get<Activo[]>(`${this.baseURL}`);
  }
  registrarActivo(activo:Activo) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, activo);
  }

  actualizarActivo(id:number,activo:Activo) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, activo);
  }

  obtenerActivoPorId(id:number):Observable<Activo>{
    return this.httpClient.get<Activo>(`${this.baseURL}/${id}`);
  }
 
  eliminarActivo(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
