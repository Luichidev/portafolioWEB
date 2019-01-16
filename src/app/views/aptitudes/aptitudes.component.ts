import { Component, OnInit } from '@angular/core';
import { Aptitudes } from 'src/app/models/aptitudes';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {

  aptitudes : any[] = Aptitudes

  constructor() { }

  ngOnInit() {
  }

}
