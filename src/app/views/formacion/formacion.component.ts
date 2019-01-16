import { Component, OnInit } from '@angular/core';
import { Formacion } from "../../models/formacion";


@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css'],
})
export class FormacionComponent implements OnInit {

  formacion : any[] = Formacion

  constructor() { }

  ngOnInit() {
  }

}
