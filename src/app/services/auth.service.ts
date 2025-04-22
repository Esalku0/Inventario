import { Injectable } from '@angular/core'; // Para que Angular pueda inyectar este servicio en otros componentes.
import { HttpClient } from '@angular/common/http'; // Para hacer peticiones HTTP al backend.
import { Observable } from 'rxjs'; // Manejo de respuestas HTTP asíncronas.

@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible en toda la app.
})
export class AuthService {
  private apiUrl = 'http://192.168.1.60:3002';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    console.log(username + " . " + password);

    console.log(`${this.apiUrl}/login`);
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  setSessionStorage(token: string,id:string, rol: string) {
    console.log("casa tarradellas " + id)
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
    localStorage.setItem('idRol', rol);
    console.log(localStorage.getItem("id") + "BBB");
  }

  getRol(): string {
    return localStorage.getItem('idRol') || '';
  }
  getIdUsuario(): string {
    return localStorage.getItem('id') || '';
  }

  esAdmin() {
    let ret;
    if (this.getRol() == '1') {
      ret = true;
    }
    return ret;
  }
  cerrarSesion() {
    localStorage.clear();
  }


}
