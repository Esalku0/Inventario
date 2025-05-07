import { Component, inject } from '@angular/core';
import { ArticulosService } from '../services/articulos.service';
import { Articles, ArticlesMap, ArticulosSinMap } from '../POJOs/article';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { TypesService } from '../services/types.service';
import { Types } from '../POJOs/types';
import { Categories } from '../POJOs/categories';
import { ViewMovements, viewMovementsMap } from '../POJOs/viewMovements';
import { ViewMovementsService } from '../services/view-movements.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-movements',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './view-movements.component.html',
  styleUrls: ['./view-movements.component.css'],
})
export class ViewMovementsComponent {

  artService: ArticulosService = inject(ArticulosService);
  movsService: ViewMovementsService = inject(ViewMovementsService);
  movLista: ViewMovements[] = [];

  newArticulo:Articles={
    id: 0,
    nombre: '',
    descrip:'',
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
    precio:0
  }
  newMovement: ViewMovements = {
    id:0,
    idArticle: 1,
    din: '',
    entryDate: new Date('2023-03-03'),
    consumptionDate: new Date('2023-03-03'),
    removedBy: '',
    quantityRemoved: 0,
    material: '',
    characteristics: '',
    model: '',
    stock: 0,
    location: '',
    reserved: 0,
    quantityToOrder: 0,
    extraRequest: '',
    quantityEntry:0
  };

  id: number = 0;
  nombre:string="";
  
  constructor(private route: ActivatedRoute) {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.id = parseInt(idParam, 10);
    }
    this.loadArticleMovements(this.id);
    this.cargarArticulo();
  }

  loadArticleMovements(id: number) {
    console.log("cargamos articlesmovements");
    this.movsService.getAllMovementsByIdArticulo(id).subscribe((data: any) => {
      this.movLista = new viewMovementsMap().get(data);

      for (let index = 0; index < this.movLista.length; index++) {
            console.log(this.movLista[index]);        
      }
    });
  }

  filterCategory: string = 'all';
  sortColumn: keyof ViewMovements = 'idArticle'; // Uso de keyof para definir la columna de ordenación
  sortOrder: 'asc' | 'desc' = 'asc'; // Uso de una unión de literales
  filteredAndSortedMovLista: ViewMovements[] = []; // Explicitly type the array

  cargarArticulo(){
    this.artService.getArticlesById(this.newMovement.idArticle).subscribe((data:any)=>{

      this.newArticulo= new ArticulosSinMap().get(data);
    });
  }

  filterTable() {

  }

  sortTable() {

  }
}
