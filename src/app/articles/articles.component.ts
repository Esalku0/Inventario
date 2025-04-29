import { Component, inject } from '@angular/core';
import { ArticulosService } from '../services/articulos.service';
import { Articles, ArticlesMap } from '../POJOs/article';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { TypesService } from '../services/types.service';
import { Types, TypesMap } from '../POJOs/types';
import { Categories, CategoriesMap } from '../POJOs/categories';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-articles',
  imports: [FormsModule, CommonModule, RouterLink, RouterModule, RouterOutlet, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent {
  arrCategories: Categories[] = [];
  arrArticulos: Articles[] = [];
  arrTypes: Types[] = [];
  inputFiltRef: string = '';
  supparrArticulos: Articles[] = [];




  newArticle: Articles = {
    id: 0,
    nombre: '',
    idCategoria: 0,
    idTipo: 0,
    idProyecto: '',
    stock: 0,
    modelo: '',
    longitud: 0,
    diametro: 0,
    peso: 0,
    altura: 0,
    dateCreation: undefined,
    userCreation: '',
    materiales: undefined,
    unidadMedida: undefined,
    condicion: undefined,
    color: undefined,
    numSerie: undefined,
    marca: undefined,
    detalles: undefined,
    imagen: '',
    descrip: ''
  };

  seleccionados: string[] = [];
 // columnas: string[] = ["Sanchez", "dimision", "perrro", "estafador", "ladron", "socialista", "terrorista"]
 columnas: string[] = []
  arService: ArticulosService = inject(ArticulosService);
  catService: CategoriesService = inject(CategoriesService);
  typService: TypesService = inject(TypesService);
  startDate = new Date().toISOString().slice(0, 16);
  campoSeleccionado = '';

  constructor() {

    this.loadArticles();
    this.loadCategories();
    this.loadTypes();
  }

  cargaCampo() {
    for (var key in this.arrArticulos) {
      console.log(' name=' + key);
    }
  }


  loadArticles() {
    this.arService.getAllArticles().subscribe((data: any) => {
      this.arrArticulos = new ArticlesMap().get(data);
    //  this.cargaCampo();
    
      this.columnas=Object.keys(this.arrArticulos[0])

    });
  }


  exportExcel() {
    //creamos objeto filtros que tiene dentro un array
    const filtros = { campos: this.seleccionados };

    // Llamamos al servicio que genera y descarga el Excel
    this.arService.exportarExcel(filtros).subscribe({
      //el blob guarda los datos binarios del archivo, en este caso un excel
      next: (blob: Blob) => {
        // Creamos una URL temporal para el Blob recibido
        const url = window.URL.createObjectURL(blob);
  
        // Creamos un <a> invisible para forzar la descarga
        const a = document.createElement('a');
        a.href = url;
        a.download = 'articulos.xlsx'; // Nombre del archivo a descargar
        document.body.appendChild(a);
        a.click(); // Simulamos el click para iniciar la descarga
        a.remove(); // Limpiamos el <a> del DOM

        console.log("Excel descargado correctamente");
      },
      error: (err) => {
        console.error('Error al exportar Excel', err);
        if (err instanceof HttpErrorResponse) {
          console.error('Contenido de la respuesta:', err.error); // Si hubo error, mostramos más detalles
        }
      }
    });
  }
  
  
  loadArticlesByName() {

    if (this.campoSeleccionado == "idCategoria") {
      console.log("seleccionas categoria");
      for (let index = 0; index < this.arrCategories.length; index++) {

        if (this.inputFiltRef == "" || this.inputFiltRef == null) {
          break;
        }

        if (this.arrCategories[index].name.includes(this.inputFiltRef) ||
          this.arrCategories[index].name.includes(this.inputFiltRef.toUpperCase()) ||
          this.arrCategories[index].name.includes(this.inputFiltRef.toLowerCase())) {
          console.log(this.inputFiltRef);
          console.log(this.arrCategories[index].name);

          this.inputFiltRef = String(this.arrCategories[index].idCategory);
        }
      }
    }

    if (this.campoSeleccionado == "idTipo") {
      for (let index = 0; index < this.arrTypes.length; index++) {

        if (this.inputFiltRef == "" || this.inputFiltRef == null) {
          break;
        }

        if (this.arrTypes[index].name.includes(this.inputFiltRef) ||
          this.arrTypes[index].name.includes(this.inputFiltRef.toUpperCase()) ||
          this.arrTypes[index].name.includes(this.inputFiltRef.toLowerCase())) {
          this.inputFiltRef = String(this.arrTypes[index].idType);
        }
      }
    }

    this.arService.getAllArticlesByName(this.inputFiltRef, this.campoSeleccionado).subscribe((data: any) => {
      this.arrArticulos = new ArticlesMap().get(data);

    });

  }

  guardarCambios(articulo: any) {
    console.log('Cambios guardados para el artículo:', articulo);
  }

  loadCategories() {
    this.catService.getAllCategorias().subscribe((data: any) => {
      this.arrCategories = new CategoriesMap().get(data);
    });
  }

  loadTypes() {
    this.typService.getAllTypes().subscribe((data: any) => {
      this.arrTypes = new TypesMap().get(data);
    });
  }


}
