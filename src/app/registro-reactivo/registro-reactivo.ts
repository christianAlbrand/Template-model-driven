import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-registro-reactivo',
  imports: [ReactiveFormsModule],
  templateUrl: './registro-reactivo.html',
  styleUrl: './registro-reactivo.css'
})
export class RegistroReactivo {
  registrado = false;
  datos: { nombre: string; apellidos: string; correo: string; telefono: string; password: string } | null = null;

  formulario = new FormGroup({
    nombre: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    apellidos: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    correo: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/)
      ]
    }),
    telefono: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^\d{10}$/)]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)]
    })
  });

  get nombre() { return this.formulario.controls.nombre; }
  get apellidos() { return this.formulario.controls.apellidos; }
  get correo() { return this.formulario.controls.correo; }
  get telefono() { return this.formulario.controls.telefono; }
  get password() { return this.formulario.controls.password; }

  registrar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched(); // por seguridad, muestra todos los errores
      return;
    }

    this.datos = this.formulario.getRawValue();
    console.log('Datos registrados:', this.datos);
    this.registrado = true;
    this.formulario.reset();
  }
}