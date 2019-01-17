import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { ReactiveFormsModule } from "@angular/forms";

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
import { EmailService } from "./services/emailService.service";
import { HttpClientModule } from '@angular/common/http';



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
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ EmailService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
