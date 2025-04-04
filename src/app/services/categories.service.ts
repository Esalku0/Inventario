import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categories } from '../POJOs/categories';
import { ruta } from '../../../Backend/ruta';
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  API_ENDPOINT = ruta + "/categories";

  constructor(private httpClient: HttpClient) { }

  getAllCategorias() {
    return this.httpClient.get(this.API_ENDPOINT);
  }

  getNameCatById(idBusqueda: number) {
    console.log(this.API_ENDPOINT + '?idCategory=' + idBusqueda);
    return this.httpClient.get(this.API_ENDPOINT + '?idCategory=' + idBusqueda);
  }

  addNewCategory(newCat: Categories) {
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.API_ENDPOINT, newCat, { headers });
  }

  delete(id: number) {
    return this.httpClient.delete(this.API_ENDPOINT + '/' + id);
  }

}
