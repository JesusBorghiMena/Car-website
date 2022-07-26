import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAutosComponent } from '../contenido/lista-autos/lista-autos.component';
import { NosotrosComponent } from '../contenido/nosotros/nosotros.component';
import { PrincipalComponent } from '../contenido/principal/principal.component';

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
    path:'**',
    redirectTo:''
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
