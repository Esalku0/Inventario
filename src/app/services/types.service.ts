import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Types } from '../POJOs/types';
import { ruta } from '../../../Backend/ruta';

@Injectable({
  providedIn: 'root',
})
export class TypesService {
  API_ENDPOINT= ruta + "/types";
  constructor(private httpClient: HttpClient) { }
  
  getAllTypes() {
    return this.httpClient.get(this.API_ENDPOINT);

  }

  getAllTypesByIdCategory(cat: number) {
    return this.httpClient.get(this.API_ENDPOINT + '?idCategory=' + cat);
  }

  getNameTypeById(idType: number) {
    console.log(this.API_ENDPOINT + "?idType=" + idType);
    return this.httpClient.get(this.API_ENDPOINT + "?idType=" + idType);
  }

  addType(newType: Types) {
    console.log(newType);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(this.API_ENDPOINT, newType, { headers });

    return this.httpClient.post(this.API_ENDPOINT, newType, { headers });
  }
  deleteType(id: number) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(this.API_ENDPOINT + '/' + id);

    return this.httpClient.delete(`${this.API_ENDPOINT}/${id}`,{responseType: 'text'});
  }



}
