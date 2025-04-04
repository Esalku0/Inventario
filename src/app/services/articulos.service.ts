import { Injectable } from '@angular/core';
import { Articles } from '../POJOs/article';
import { ruta } from '../../../Backend/ruta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ArticulosService {

  rutafinal:string=ruta+"/articles";
  constructor(private httpClient: HttpClient) {}

  getAllArticles() {
    console.log("BB "+  this.rutafinal);
    return this.httpClient.get(this.rutafinal);
  }

  getArticlesById(id:number) {
    console.log(this.rutafinal + "?id="+id);
    return this.httpClient.get(this.rutafinal + "?id="+id);
  }



  getAllArticlesByName(name: string) {
    console.log(this.rutafinal +"?nombre="+name);
    return this.httpClient.get(this.rutafinal +"?nombre="+name);
  }

  addArticulo(newArt: Articles) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.rutafinal, newArt, { headers });
  }
  

  putArticulo(newArt:Articles){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put(this.rutafinal + '/' + newArt.id, newArt, { headers: headers });
  }

  getTiposArticulos() {
    return this.httpClient.get<any>('http://localhost:3000/api/tipos-articulos'); // Llama a la API del backend
  }
  

  updateStock(idArticle: number, stock: number) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // Cuerpo de la solicitud con el nuevo valor de 'stock'
    console.log("aço es lo bo " + stock);
    const body = { stock: stock };
    // Realizamos la solicitud PUT a la API con el ID del artículo en la URL
    return this.httpClient.put(`${this.rutafinal}/${idArticle}`, body,{responseType: 'text'});
  }

}
