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

@Component({
  selector: 'app-articles',
  imports: [FormsModule, CommonModule, RouterLink, RouterModule, RouterOutlet, MatIconModule],
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

  loadArticles() {
    this.arService.getAllArticles().subscribe((data: any) => {
      this.arrArticulos = new ArticlesMap().get(data);
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
            this.arrTypes[index].name.includes(this.inputFiltRef.toUpperCase())||
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
