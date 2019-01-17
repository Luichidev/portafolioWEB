import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Mensaje } from 'src/app/models/mensaje';
import { EmailService } from 'src/app/services/emailService.service';


@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  form: FormGroup
  msg = new Mensaje

  constructor(
    private fb: FormBuilder,
    private mail: EmailService
  ) {
    this.crearCampos()
  }

  ngOnInit() {  }

  crearCampos() {
    this.form = this.fb.group({
      nombre: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(3)
      ])],
      correo: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      telefono: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]{7,9}')
      ])],
      mensaje: '',
      recaptchaReactive: ['', Validators.required],
      checkbox: ['', Validators.requiredTrue]
    })
  }

  onEnviar(): void {
    this.msg = this.form.value
    this.enviarServicio(this.msg)
    alert('Mensaje enviado')
    this.crearCampos()
  }

  enviarServicio(msg: Mensaje) {
    this.mail.sendEmail(msg)
    .subscribe(
      res => console.log(res),
      err => console.log(err),
      () => {
        console.log('Email enviado')
      })
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}`)
  }
}
