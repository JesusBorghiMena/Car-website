import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ComprarComponent } from './comprar/comprar.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    FooterComponent,
    HeaderComponent,
    ContactoComponent,
    EquipoComponent,
    ComprarComponent,
    ServiciosComponent,
    LoginComponent

  ],
  exports: [
    PrincipalComponent,
    FooterComponent,
    HeaderComponent,
    ContactoComponent,
    EquipoComponent,
    ComprarComponent,
    ServiciosComponent
     ],
  imports: [
    CommonModule
    ]
})
export class ContenidoModule { }
