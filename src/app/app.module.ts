import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormacionComponent } from './views/formacion/formacion.component';
import { AptitudesComponent } from './views/aptitudes/aptitudes.component';
import { GaleriaComponent } from './views/galeria/galeria.component';
import { ProyectosComponent } from './views/proyectos/proyectos.component';
import { ContactosComponent } from './views/contactos/contactos.component';
import { Error404Component } from './views/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    FormacionComponent,
    AptitudesComponent,
    GaleriaComponent,
    ProyectosComponent,
    ContactosComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
