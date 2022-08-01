import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../interface/vehiculo';
import { VehiculoServiceService } from '../vehiculo-service.service';

@Component({
  selector: 'app-lista-autos',
  templateUrl: './lista-autos.component.html',
  styleUrls: ['./lista-autos.component.css']
})
export class ListaAutosComponent implements OnInit {

  vehiculos:Vehiculo[]=[];
  constructor(private servicio:VehiculoServiceService) { }

  ngOnInit(): void {

    this.servicio.getAutomovil().subscribe(
      resp => this.vehiculos=resp
    );

   
  }

}
