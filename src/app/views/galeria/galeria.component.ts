import { Component, OnInit } from '@angular/core';
import { ImagesBasic } from 'src/app/models/galeria';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  imagesBasic : any[] = ImagesBasic
  image_modal : string = ""
  image_description: string = ""
  id : string = ""

  constructor() { }

  ngOnInit() { }

  onOpen(event: any) {
    this.image_modal = event.target.src

  }

  onOpenImg(id: string) {
    this.id = id
    console.log(this.id)
    this.getDescription(this.id)
  }

  getDescription(id: string) {
    this.imagesBasic.forEach(elem => {
      if(elem.id == id) this.image_description = elem.description
    });
  }
}
