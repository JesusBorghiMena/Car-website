import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprarComponent } from '../contenido/comprar/comprar.component';
import { ContactoComponent } from '../contenido/contacto/contacto.component';
import { EquipoComponent } from '../contenido/equipo/equipo.component';
import { ListaAutosComponent } from '../contenido/lista-autos/lista-autos.component';
import { NosotrosComponent } from '../contenido/nosotros/nosotros.component';
import { PrincipalComponent } from '../contenido/principal/principal.component';
import { ServiciosComponent } from '../contenido/servicios/servicios.component';

const routes: Routes = [
  {
    path:'',
    component:PrincipalComponent,
    pathMatch:'full'
  },
  {
    path:'inicio',
    component:PrincipalComponent
  },
  {
    path:'nosotros',
    component:NosotrosComponent
  },
  {
    path:'lista',
    component:ListaAutosComponent
  },
  {
    path:'servicios',
    component:ServiciosComponent
  },
  {
    path:'compra',
    component:ComprarComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  },
  {
    path:'equipo',
    component:EquipoComponent
  },
    {
    path:'**',
    redirectTo:''
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
