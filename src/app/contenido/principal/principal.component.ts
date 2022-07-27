import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  mensaje:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  enviado():void{
   this.mensaje = true;
  }

}
