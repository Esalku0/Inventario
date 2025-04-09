import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ubicaciones } from '../POJOs/ubicaciones';
import { ruta } from '../../../Backend/ruta';

@Injectable({
  providedIn: 'root',
})

export class UbicacionesService {
  API_ENDPOINT = ruta + "/ubicaciones";
  constructor(private httpClient: HttpClient) { }

  getAllUbicaciones(){
    return this.httpClient.get(this.API_ENDPOINT);
  }

  getAllUbicacionesById(id: number){
    return this.httpClient.get(this.API_ENDPOINT + "/" + id);
  }

  addUbicacion(newUbi:Ubicaciones){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.post(this.API_ENDPOINT,newUbi,{headers});
  }

  deleteUbicacionesById(id: number){
    return this.httpClient.delete(this.API_ENDPOINT + "/" + id,{responseType: 'text'});
  }
}