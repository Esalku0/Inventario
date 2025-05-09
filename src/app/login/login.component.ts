import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service"; // Importamos el servicio de autenticación.
import { Router, RouterLink, RouterModule, RouterOutlet } from "@angular/router"; // Para redirigir al usuario después del login.
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-login",
  imports: [FormsModule, CommonModule, RouterLink, RouterModule, RouterOutlet],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})

export class LoginComponent {
  username: string = ""; // Variable para almacenar el nombre de usuario.
  password: string = ""; // Variable para la contraseña.
  errorMessage: string = ""; // Mensaje de error si las credenciales son incorrectas.

  constructor(private authService: AuthService, private router: Router) {
    console.log(localStorage.getItem('id'));
    console.log(localStorage.getItem('token'));
    console.log(localStorage.getItem('idRol'));
  }

  login() {
    console.log(this.username);
    console.log("bien1");

  
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log("aaa");

        if (response.token) {
          // Si el backend devuelve un token...
          console.log("bien");
          console.log(response.token);

          console.log(response.id);
          console.log(response.idRol);

          this.authService.setSessionStorage(response.token,response.id,response.idRol); // Lo guardamos en el navegador.
          console.log("bien");

          console.log("aaa" +     localStorage.getItem('id') || 'a');

          if (localStorage.getItem('idRol')=="2") {
            this.router.navigate(["/viewArticles"]); 
          }else{
            this.router.navigate(["/home"]); 
          }

        } else {
          this.errorMessage = "Credenciales incorrectas";
        }
      },
      (error) => {
        this.errorMessage = "Error en el login";
      }
    );
  }
}
