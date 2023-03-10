import { Component } from '@angular/core';

export interface User {
  nombre: string;
  apellidos: string;
  edad: number | string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputForm = {
    nombre: '',
    apellidos: '',
    edad: '',
  };

  usuarios: User[] = [];

  isInvalid = false;

  agregar() {
    if (
      Object.values(this.inputForm).includes('') ||
      Number(this.inputForm.edad) <= 0
    ) {
      this.isInvalid = true;
      return;
    }

    this.isInvalid = false;

    const user: User = {
      ...this.inputForm,
    };

    this.usuarios.push(user);
    this.inputForm = {
      edad: '',
      apellidos: '',
      nombre: '',
    };
  }
}
