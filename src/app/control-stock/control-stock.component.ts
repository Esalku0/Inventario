import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoriesService } from '../services/categories.service';
import { TypesService } from '../services/types.service';
import { ArticulosService } from '../services/articulos.service';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ViewMovementsService } from '../services/view-movements.service';
import { Articles, ArticlesMap } from '../POJOs/article';
import { Categories, CategoriesMap } from '../POJOs/categories';
import { Types, TypesMap } from '../POJOs/types';
import { ViewMovements } from '../POJOs/viewMovements';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { UsuariosService } from '../services/usuarios.service';
import { Users, UsersSinMap } from '../POJOs/users';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-control-stock',
  templateUrl: './control-stock.component.html',
  styleUrl: './control-stock.component.css',
  imports: [FormsModule,
    
  ]
})
export class ControlStockComponent {
  selectedDate: Date | undefined;
  stock = 0;
  inputRef = '';
  selectedCategory = '';
  selectedType = '';
  fecha: string | undefined;
  cantInp = 0;
  okayRef = true;
  cant: number = 0;
  arrCategories: Categories[] = [];
  arrTypes: Types[] = [];
  arrArticles: Articles[] = [];

  newArticle: Articles = this.initNewArticle();
  newMovement: ViewMovements = this.initNewMovement();
  authService: AuthService = inject(AuthService);
  categorieService: CategoriesService = inject(CategoriesService);
  typesService: TypesService = inject(TypesService);
  artService: ArticulosService = inject(ArticulosService);
  movementService: ViewMovementsService = inject(ViewMovementsService);
  usuService: UsuariosService = inject(UsuariosService);
  dialog: MatDialog = inject(MatDialog);
  router: Router = inject(Router);
  datePipe: DatePipe = inject(DatePipe);
  popup:ToastrService=inject(ToastrService);
  usuario: string = "";

  newUser: Users = {
    id: 0,
    nombre: '',
    apellidos: '',
    email: '',
    contrasenya: '',
    idRol: 0,
    idDepartamento: 0
  }
 
  constructor() {
    this.loadCategories();
 
    this.loadTypesByIdCategory(this.newArticle.idCategoria);
 
   this.usuario = this.authService.getIdUsuario();
 
    this.cargarNombreUsuario();
  }
 
 
 loadCategories(): void {
    this.categorieService.getAllCategorias().subscribe({
      next: (data: any) => {
        this.arrCategories = new CategoriesMap().get(data);
        console.log('Respuesta del backend:', data);
      
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error al cargar categorías:', err);
        if (err.error) console.error('Detalles del error:', err.error);
      }
    });
  }

  loadTypesByIdCategory(idCategory: number): void {
    this.typesService.getAllTypesByIdCategory(idCategory).subscribe((data: any) => {
      this.arrTypes = new TypesMap().get(data);
    });
  }

  onDateChange(event: any): void {
    this.selectedDate = event.value;
    console.log('Fecha seleccionada:', this.selectedDate);
  }

  logout(): void {
    this.authService.cerrarSesion();
  }
  comprobacion: boolean = false;

  //Esta función busca un artículo por nombre y actualiza los datos necesarios
  //Una vez terminado, ejecuta el callback que se le pasa
  //Un callback es simplemente una función que se pasa como argumento a otra función, para que se ejecute cuando termine algo
  //ES DECIR, NOSOTROS LE VAMOS A PASAR EL CODIGO EN LA FUNCIOND DE ANYADIR
  comprobarReferencia(callback: () => void): void {
    this.artService.getAllArticles().subscribe((data: any) => {
      // Transformamos la respuesta en el array de artículos que usamos
      this.arrArticles = new ArticlesMap().get(data);

      // Reiniciamos la variable de comprobación por si ya tenía valor
      this.comprobacion = false;

      // Buscamos si el nombre ingresado coincide con alguno de los artículos
      for (const article of this.arrArticles) {
        if (article.nombre.toLowerCase() === this.inputRef.toLowerCase()) {
          // Si lo encontramos, actualizamos variables
          this.comprobacion = true;
          this.newArticle = article;
          this.newMovement.idArticle = article.id;
          this.stock = article.stock ?? 0; // Si no tiene stock, asumimos 0
          this.cant = this.newArticle.stock ?? 0;
          break;
        }
      }

      callback();
    });
  }

  anyadir(): void {

    //definimos funcion flecha para poder ejecutar dos funciones de suscripcion de forma asincrona.
    this.comprobarReferencia(() => {

      console.log(this.comprobacion);

      if (!this.comprobacion) {
        this.openDialog();
      } else {


        const currentDateAndTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', 'Africa/Johannesburg');
        this.newMovement.entryDate = currentDateAndTime ? new Date(currentDateAndTime) : new Date();
        this.movementService.addMovement(this.newMovement).subscribe({
          next: (data: any) => {
            this.cant = this.stock + this.newMovement.quantityEntry;
            this.artService.updateStock(this.newMovement.idArticle, this.cant).subscribe({
              next: (data: any) => {
                console.log('Movimiento agregado exitosamente', data);
                this.vaciarObjeto();
                this.showSuccess();
              }, error: this.handleError
            });
          },
          error: this.handleError
        });
      }
    });
  }

  today: number = Date.now();

  sacarStock() {
    const currentDateAndTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', 'Europe/Madrid');
    this.newMovement.consumptionDate = currentDateAndTime ? new Date(currentDateAndTime) : new Date();

    this.newMovement.removedBy = this.newUser.nombre;

    this.comprobarReferencia(() => {
      console.log(this.comprobacion);

      if (!this.comprobacion) {
        this.openDialog();
      } else {
        console.log("consumption " + this.newMovement.quantityRemoved);
        this.cant = this.stock - this.newMovement.quantityRemoved;
        this.newMovement.stock = this.cant;
        console.log("cantidad actual: " + this.cant);
        this.movementService.addMovement(this.newMovement).subscribe({
          next: (data: any) => {
            this.artService.updateStock(this.newArticle.id, this.cant).subscribe({
              next: (data: any) => {
                this.vaciarObjeto();
                this.showSuccess();
              }, error: this.handleError
            })
          }, error: this.handleError
        });
      }

    });

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      result ? this.siAction() : this.noAction();
    });
  }

  siAction(): void {
    this.router.navigate(['/', 'AddArticle']);
  }

  noAction(): void {
    this.vaciarObjeto();
  }

  comprobarNombre(): void {
    if (!this.inputRef || this.inputRef.length <= 1) {
      alert('La referencia no puede estar vacía');
    }
  }

  vaciarObjeto(): void {
    this.newArticle = this.initNewArticle();
    this.newMovement = this.initNewMovement();
  }

  private initNewArticle(): Articles {
    return {
      id: 2,
      nombre: '',
      descrip: '',
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
    };
  }

  private initNewMovement(): ViewMovements {
    return {
      id: 0,
      idArticle: 0,
      din: '',
      entryDate: undefined,
      consumptionDate: undefined,
      removedBy: undefined,
      quantityRemoved: 0,
      material: '',
      characteristics: '',
      model: '',
      stock: 0,
      location: '',
      reserved: 0,
      quantityToOrder: 0,
      extraRequest: '',
      quantityEntry: 0
    };
  }

  private handleError(error: any): void {
    console.error('Error al agregar movimiento', error);
    if (error.status) {
      console.error(`Código de error HTTP: ${error.status}`);
      console.error(`Mensaje del error: ${error.statusText}`);
    }
    if (error.message) {
      console.error(`Mensaje adicional: ${error.message}`);
    }
    if (error.error) {
      console.error('Detalles del error desde el servidor:', error.error);
    }
  }

  cargarNombreUsuario() {

    this.usuService.getUsuarioById(parseInt(this.usuario)).subscribe((data: any) => {
      if (data) {
        console.log("boo");

      } else {
        console.log("error");
      }

      this.newUser = new UsersSinMap().get(data[0]);
      console.log(this.newUser.nombre);
    });
  }

  referenciaValida: boolean = false;  // Indica si la referencia es válida
  referenciaError: boolean = false;  // Indica si hay un error con la referencia



  // Función para cancelar la búsqueda y limpiar el estado
  cancelarBusqueda(): void {
    this.inputRef = '';  // Limpia el campo de entrada
    this.referenciaValida = false;
    this.referenciaError = false;
    this.comprobacion = false;
  }

  goBack(): void {
    window.history.back();
  }

  referenchia() {
    this.artService.getAllArticles().subscribe((data: any) => {
      // Transformamos la respuesta en el array de artículos que usamos
      this.arrArticles = new ArticlesMap().get(data);

      // Reiniciamos la variable de comprobación por si ya tenía valor
      this.comprobacion = false;

      // Buscamos si el nombre ingresado coincide con alguno de los artículos
      for (const article of this.arrArticles) {
        if (article.nombre.toLowerCase() === this.inputRef.toLowerCase()) {
          // Si lo encontramos, actualizamos variables
          this.comprobacion = true;
          this.newArticle = article;
          this.newMovement.idArticle = article.id;
          this.cant = this.newArticle.stock ?? 0;
          this.stock = article.stock ?? 0; // Si no tiene stock, asumimos 0
          break;
        }
      }
      if(this.comprobacion===false){
        this.openDialog();
      }
    });
  }



  showSuccess() {
    this.popup.success('¡Movimiento realizado correctamente!', '¡Perfecto!');
  }

}
