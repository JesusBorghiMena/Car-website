import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Vehiculo } from './interface/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoServiceService {

  urlBase:string="http://localhost:8089/api"

  constructor(private http:HttpClient) { }
//el metodo get para recuperar todos los clientes
  getAutomovil():Observable<Vehiculo[]>{
    return this.http.get(`${this.urlBase}/vehiculos`).pipe(
      map( (response) => response as Vehiculo[] )
    );
  }
}
