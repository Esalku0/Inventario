import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service'; // Importamos el servicio de autenticación.
import { RouterLink, Routes, RouterModule, RouterOutlet, ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { Users, UsersMap, UsersSinMap } from '../POJOs/users';
import { Departamentos, DepartamentosMap, DepartamentosSinMap } from '../POJOs/departamentos';
import { DepartamentosService } from '../services/departamentos.service';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-app',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterModule, RouterOutlet,MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class HomeComponent {
  router: Router = inject(Router);
  authService: AuthService = inject(AuthService);
  userServ: UsuariosService = inject(UsuariosService);
  deptService: DepartamentosService = inject(DepartamentosService);

  rol: string = "";
  usuario: string = "";

  nombreDept = "";
  newUser: Users = {
    id: 0,
    nombre: 'a',
    apellidos: '',
    email: '',
    contrasenya: '',
    idRol: 0,
    idDepartamento: 1
  }
  newDept:Departamentos={
    idDepartamento: 0,
    nombre: '',
    descrip: ''
  }

  constructor() {
    this.rol = this.authService.getRol();
    this.usuario = this.authService.getIdUsuario();

    this.cargarNombreUsuario();
    this.cargarDepartamento();
  }

  logout() {
    this.authService.cerrarSesion();
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('idRol');
    this.router.navigate(['/']);
  }

  cargarNombreUsuario() {

    this.userServ.getUsuarioById(parseInt(this.usuario)).subscribe((data: any) => {
      if (data) {
        console.log("boo");

      } else {
        console.log("error");
      }

      this.newUser = new UsersSinMap().get(data[0]);
      console.log(this.newUser.nombre);
    });
  }

  cargarDepartamento() {
    this.deptService.getDepartamentoById(this.newUser.idDepartamento).subscribe((data:any)=>{
      this.newDept=new DepartamentosSinMap().get(data);
      console.log("ENTRAMOS EN DPT");
      console.log(this.newDept.nombre);
    });
  }





}
