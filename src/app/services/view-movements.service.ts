import { Injectable } from '@angular/core';
import { ViewMovements } from '../POJOs/viewMovements';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ruta } from '../../../Backend/ruta';

@Injectable({
  providedIn: 'root',
})

export class ViewMovementsService {

  API_ENDPOINT = ruta + "/viewMovements";
  constructor(private httpClient: HttpClient) { }

  getAllMovements() {
    return this.httpClient.get(this.API_ENDPOINT);
  }

  getAllMovementsById(idBusqueda: number) {
    console.log("Ojo, este solo es el id del view, no del articulo");
    return this.httpClient.get(this.API_ENDPOINT + '/' + idBusqueda);
  }

  getAllMovementsByIdArticulo(idArticulo: number) {
    console.log(this.API_ENDPOINT + '?idArticle=' + idArticulo);
    return this.httpClient.get(this.API_ENDPOINT + '?idArticle=' + idArticulo);
  }

  addMovement(newMovement: ViewMovements) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(this.API_ENDPOINT);
    console.log(newMovement);
    return this.httpClient.post(this.API_ENDPOINT , newMovement, { headers });
  }

  deleteMovement(id: number) {
    return this.httpClient.delete(this.API_ENDPOINT + '/' + id);
  }


}
