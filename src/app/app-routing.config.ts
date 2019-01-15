import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FormacionComponent } from './views/formacion/formacion.component';
import { AptitudesComponent } from './views/aptitudes/aptitudes.component';
import { GaleriaComponent } from './views/galeria/galeria.component';
import { ProyectosComponent } from './views/proyectos/proyectos.component';
import { ContactosComponent } from './views/contactos/contactos.component';
import { Error404Component } from './views/error404/error404.component';



export const routes : Routes = [
  { path: '', component :HomeComponent},
  { path: 'formacion', component: FormacionComponent},
  { path: 'aptitudes', component: AptitudesComponent},
  { path: 'galeria', component: GaleriaComponent},
  { path: 'proyectos', component: ProyectosComponent},
  { path: 'contacto', component: ContactosComponent},
  { path: '**', component: Error404Component}
]
