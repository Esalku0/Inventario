import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ruta } from '../../../Backend/ruta';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  API_ENDPOINT = ruta + "/departamentos";

  constructor(private httpClient: HttpClient) { }


  getAllDepartamentos(){
    return this.httpClient.get(this.API_ENDPOINT);
  }

  getDepartamentoById(id: number){
    console.log(this.API_ENDPOINT + "?idDepartamento="+id);
    return this.httpClient.get(this.API_ENDPOINT + "?idDepartamento="+id);
  }

}
