import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Users, UsersMap } from '../POJOs/users';
import { UsuariosService } from '../services/usuarios.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DepartamentosService } from '../services/departamentos.service';
import { Departamentos, DepartamentosMap } from '../POJOs/departamentos';


@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  newUser: Users = {
    id: 0,
    nombre: '',
    apellidos: '',
    email: '',
    contrasenya: '',
    idRol: 0,
    idDepartamento: 1
  }
  usuService: UsuariosService = inject(UsuariosService);
  dptService: DepartamentosService = inject(DepartamentosService);
  arrDepts: Departamentos[] = [];
  arrUsers: Users[] = [];

  constructor() {
    this.cargarDepartamento();
    this.cargarUsuariosPorDepartamento();
  }

  registrarUsuario() {
    this.usuService.addUsuario(this.newUser).subscribe({
      next: (data: any) => {
        //vaciamos el objeto para dejar limpio loscampos del formlario
        this.newUser = {
          id: 0,
          nombre: '',
          apellidos: '',
          email: '',
          contrasenya: '',
          idRol: 0,
          idDepartamento: 0
        };
        this.cargarUsuariosPorDepartamento();
      },
      error: (err) => {
        console.error('Error al cargar categorías:', err);
        if (err instanceof HttpErrorResponse) {
          console.error('Contenido de la respuesta de error:', err.error); // Verifica el cuerpo del error
        }
      }
    });
  }

  validateEmail() {
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(this.newUser.email)) {
      alert("Por favor, introduce un correo electrónico válido.");
      this.newUser.email = ""; // Opcional: Limpia el campo si es inválido
    }
  }

  validatePassword() {
    const passwPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/;
    if (!passwPattern.test(this.newUser.contrasenya)) {
      alert("Por favor, introduce una contrasenya válida.");
      this.newUser.contrasenya = ""; // Opcional: Limpia el campo si es inválido
    }
  }

  cargarUsuariosPorDepartamento() {

    this.usuService.getAllUsuarios().subscribe((data: any) => {
      this.arrUsers = new UsersMap().get(data);

    })
  }

  cargarDepartamento() {
    this.dptService.getAllDepartamentos().subscribe((data: any) => {
      this.arrDepts = new DepartamentosMap().get(data);
    });
  }
  borrarUsuario(id:number) {
    this.usuService.delete(id).subscribe({
      next: (data: any) => {
        this.cargarUsuariosPorDepartamento();
      }
    });
  }

}
