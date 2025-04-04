import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ruta } from '../../../Backend/ruta';
import { Users } from '../POJOs/users';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  API=ruta +"/usuarios";

  constructor(private httpClient: HttpClient) { }

  getAllUsuarios() {
    console.log(this.httpClient.get(this.API));
    return this.httpClient.get(this.API);
  }

  getUsuarioById(id: number) {
    console.log("aa" + id)
    console.log(this.API + '?id=' + id);
    return this.httpClient.get(this.API +'?id=' + id);
  }

  getUsuarioByDepartamento(id: number) {
    console.log(this.API +'?idDepartamento=' + id);
    return this.httpClient.get(this.API +'?idDepartamento=' + id);
  }

  addUsuario(newUser: Users){
    console.log(newUser.contrasenya);
    console.log(ruta+"/registro");

    return this.httpClient.post(ruta+"/registro",newUser);
  }

  putUsuario(newUser: Users) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put(this.API + '/' + newUser.id, newUser, { headers: headers });
  }

  delete(id: number) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(this.API + '/' + id);
   
    return this.httpClient.delete( `${this.API}/${id}`,{responseType: 'text'});
  }
}
