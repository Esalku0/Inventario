import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ruta } from '../../../Backend/ruta';
import { Proyectos } from '../POJOs/proyectos';

@Injectable({
  providedIn: 'root',
})

export class ProyectosService {
  API_ENDPOINT = ruta + "/proyectos";
  constructor(private httpClient: HttpClient) { }

  getAllProyectos() {
    return this.httpClient.get(this.API_ENDPOINT);
  }

  getAllProyectosById(id: number) {
    return this.httpClient.get(this.API_ENDPOINT + "/" + id);
  }

  addProyecto(newPo: Proyectos) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(newPo);
    console.log((this.API_ENDPOINT, newPo, { headers }));
    return this.httpClient.post(this.API_ENDPOINT, newPo, { headers });
  }

  deleteProyectosById(id: number) {
    return this.httpClient.delete(this.API_ENDPOINT + "/" + id,{responseType: 'text'});
  }
}