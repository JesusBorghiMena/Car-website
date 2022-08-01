import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { VehiculoServiceService } from '../contenido/vehiculo-service.service';

import { Vehiculo } from '../contenido/interface/vehiculo';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  cliente!:Vehiculo;
  fotoSeleccionada!:File;

  constructor(private servicio:VehiculoServiceService,
    private activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  /*ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      params=>{
        let id:number = +params.get('id')!;
        if(id){
          this.servicio.getVehiculoId(id).subscribe(
            resp => this.vehiculo = resp
          );
        }
      }
    );
  }
  /*
  /*seleccionarImagen(event:any){
    this.fotoSeleccionada=event.target.files[0];
    console.log(this.fotoSeleccionada);
  }*/

 /* subirImagen():void{
    if(!this.fotoSeleccionada){
      swal('Error','Debe seleccionar una imagen','error');
    }else{
      this.servicio.subirImagen(this.fotoSeleccionada,this.vehiculo.id).subscribe( event=>{
        if(event.type===HttpEventType.Response){
          let response:any = event.body;
          this.vehiculo = response.cliente as Cliente;
          swal('La imagen se ha subido correctamente',response.mensaje,'success');
        }

      }

      );
    }
  }*/

}

