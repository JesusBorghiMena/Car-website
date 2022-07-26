import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EquipoComponent } from './equipo/equipo.component';
import { TestimonialComponent } from './testimonial/testimonial.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    FooterComponent,
    HeaderComponent,
    ContactoComponent,
    EquipoComponent,
    TestimonialComponent

  ],
  exports: [
    PrincipalComponent,
    HeaderComponent,
    FooterComponent
     ],
  imports: [
    CommonModule
    ]
})
export class ContenidoModule { }
