import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Mensaje } from '../models/mensaje';

@Injectable()

export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(msg: Mensaje): Observable<any>  {
    return this.http.post('./assets/enviar.php', msg)
  }
}
