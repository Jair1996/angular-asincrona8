import { Component } from '@angular/core';

interface User {
  nombre: string;
  apellidos: string;
  edad: number | string;
  condicion: string;
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
      condicion: '',
    };

    this.usuarios.push(user);
  }
}
