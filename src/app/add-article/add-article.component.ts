import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Articles } from '../POJOs/article';
import { Categories, CategoriesMap, CategoriesSinMap } from '../POJOs/categories';
import { Types, TypesMap, TypesSinMap } from '../POJOs/types';
import { CategoriesService } from '../services/categories.service';
import { TypesService } from '../services/types.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ArticulosService } from '../services/articulos.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-add-article',
  imports: [FormsModule, CommonModule, RouterLink, RouterModule, RouterOutlet],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css',
})

export class AddArticleComponent {
  currentDate = new Date();
  newArticle: Articles = {
    id: 0,
    nombre: '',
    descrip:'',
    idCategoria: 0,
    idProyecto: '',
    idTipo: 0,
    stock: 0,
    modelo: undefined,
    longitud: undefined,
    diametro: undefined,
    peso: undefined,
    altura: undefined,
    materiales: undefined,
    unidadMedida: undefined,
    condicion: undefined,
    color: undefined,
    numSerie: undefined,
    marca: undefined,
    detalles: undefined,
    dateCreation: this.currentDate,
    userCreation: 'admin',
  };
  objCat: Categories = {
    idCategory: 0,
    name: '',
    descrip: ''
  };
  objType: Types = {
    idType: 0,
    name: '',
    descrip: '',
    idCategory: 0
  }

  artService: ArticulosService = inject(ArticulosService);
  categorieService: CategoriesService = inject(CategoriesService);
  arrCategories: Categories[] = [];
  typesService: TypesService = inject(TypesService);
  arrTypes: Types[] = [];

  selectedOption: string = "";
  inputRef: string = '';

  okayRef: boolean = true;

  constructor() {
    this.loadCategories();
    this.loadTypesById(this.newArticle.idCategoria);
  }

  loadCategories() {
    this.categorieService.getAllCategorias().subscribe((data: any) => {
      this.arrCategories = new CategoriesMap().get(data);

    });
  }

  loadTypesById(idCategory: number) {
    console.log('Id para cargar tipo ' + idCategory);
    this.typesService.getAllTypesByIdCategory(idCategory).subscribe((data: any) => {
      this.arrTypes = new TypesMap().get(data);
    });
  }
  cargarNombreCat() {
    this.categorieService.getNameCatById(this.newArticle.idCategoria).subscribe((data: any) => {
      this.objCat = new CategoriesSinMap().get(data);
      console.log("proba " + this.objCat.name.toString().substring(0, 3));
    });
  }

  cargarNombreTyp() {
    this.typesService.getNameTypeById(this.newArticle.idTipo).subscribe((data: any) => {
      this.objType = new TypesSinMap().get(data);
      console.log("proba " + this.objType.name.toString().substring(0, 3));
    });
  }

  comprobarCodigoNombre() {
    //variables para dividir los codigos de los nombres
    var iniCat: string;
    var iniType: string;
    var iniRef: string;

    console.log("Bonicoibarato " + this.newArticle.idCategoria);
    console.log("Z " + this.newArticle.idTipo);

    this.cargarNombreCat();
    this.cargarNombreTyp();
    //pillamos las variables y les metemos las iniciales del valor devuelto de la petición
    //const varApoyo1:Categories = this.categorieService.getNameCatById(this.newArticle.idCategoria);
    //console.log(varApoyo1);

    iniCat = this.objCat.name.toString().substring(0, 3)
    iniType = this.objType.name.toString().substring(0, 3);
    //pillamos el valor del input, para comprararl con las variables y comprobar que la referencia es correcta
    iniRef = this.inputRef.toString().substring(0, 6);
    console.log("CAT " + iniCat);
    console.log("typ " + iniType);
    console.log("refe " + iniRef);
    if (iniRef.toUpperCase() == iniCat.concat(iniType).toUpperCase()) {
      this.okayRef = true;
      console.log("BO1" + iniRef);
      console.log(this.newArticle.nombre);
      iniRef = this.newArticle.nombre;
      console.log("modificado " + this.newArticle.nombre);
    } else {
      this.okayRef = false;
    }

  }

  addArticle() {
    const fechaString = this.getFechaFormatoMySQL(); // Obtenemos la fecha en formato MySQL
    const fechaDate = new Date(fechaString); // Convertimos la cadena a objeto Date

    this.newArticle.dateCreation = fechaDate; // Asignamos correctamente la fecha
    this.newArticle.nombre = this.inputRef;

    this.artService.addArticulo(this.newArticle).subscribe({
      next: (response) => { 
        console.log('Respuesta del backend:', response); 
        this.vaciarObjeto(); // Ahora se ejecuta correctamente
      },
      error: (err) => {
        console.error('Error al enviar artículo:', err);
        if (err instanceof HttpErrorResponse) {
          console.error('Contenido de la respuesta:', err.error); // Para ver el cuerpo de la respuesta
        }
      }
    });
}


  mostrarCampos: boolean = false;

  // Método para cambiar el estado de 'mostrarCampos'
  toggleCampos() {
    this.mostrarCampos = !this.mostrarCampos;
  }

  getFechaFormatoMySQL(): string {
    const fecha = new Date();
    const año = fecha.getFullYear();
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Mes empieza en 0
    const dia = fecha.getDate().toString().padStart(2, '0');
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');

    return `${año}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
  }

  vaciarObjeto(){
    this.newArticle = {
      id: 0,
      nombre: '',
      descrip:'',
      idCategoria: 0,
      idProyecto: '',
      idTipo: 0,
      stock: 0,
      modelo: undefined,
      longitud: undefined,
      diametro: undefined,
      peso: undefined,
      altura: undefined,
      materiales: undefined,
      unidadMedida: undefined,
      condicion: undefined,
      color: undefined,
      numSerie: undefined,
      marca: undefined,
      detalles: undefined,
      dateCreation: this.currentDate,
      userCreation: 'admin',
    };
  }



}
