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
  imports: [FormsModule, CommonModule, RouterLink, RouterModule, RouterOutlet,MatIconModule],
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
    imagen:'',
    descrip: ''
  };

  arService: ArticulosService = inject(ArticulosService);
  catService: CategoriesService = inject(CategoriesService);
  typService: TypesService = inject(TypesService);
  startDate = new Date().toISOString().slice(0, 16);

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
    this.arService.getAllArticlesByName(this.inputFiltRef).subscribe((data: any) => {
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
