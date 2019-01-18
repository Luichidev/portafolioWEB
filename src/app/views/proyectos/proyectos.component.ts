import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/models/proyectos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: any[] = Proyectos

  constructor() { }

  ngOnInit() {
  }

}
