import { Component, inject } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Categories, CategoriesMap } from '../POJOs/categories';
import { FormsModule } from '@angular/forms';
import { Articles } from '../POJOs/article';
import { Types, TypesMap } from '../POJOs/types';
import { TypesService } from '../services/types.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-types',
  imports: [FormsModule, CommonModule, RouterLink, RouterModule, RouterOutlet],
  templateUrl: './types.component.html',
  styleUrl: './types.component.css',
})
export class TypesComponent {
  arrTypes: Types[] = [];
  arrCats: Categories[] = [];
  newTipo: Types = {
    idType: 0,
    name: '',
    descrip: '',
    idCategory: 0,
  };

  typService: TypesService = inject(TypesService);
  catService: CategoriesService = inject(CategoriesService);
  popup: ToastrService = inject(ToastrService);

  constructor() {
    this.loadTypes();
    this.cargarCategorias();
  }

  loadTypes() {
    this.typService.getAllTypes().subscribe((data: any) => {
      this.arrTypes = new TypesMap().get(data);
    });
  }
  addNewType() {
    this.typService.addType(this.newTipo).subscribe(() => {
      this.loadTypes();

      this.newTipo = {
        idType: 0,
        name: '',
        descrip: '',
        idCategory: 0,
      };

    });
  }

  cargarCategorias() {
    this.catService.getAllCategorias().subscribe((data: any) => {
      this.arrCats = new CategoriesMap().get(data);
    });
  }

  borrarTipo(id: number) {
    this.typService.deleteType(id).subscribe((data: any) => {
      if (data) {
        this.showSuccess();
        this.loadTypes();
      } else {
        this.showError();
      }
    });
  }

  showSuccess() {
    this.popup.success('¡Movimiento realizado correctamente!', '¡Perfecto!');
  }

  showError() {
    this.popup.error('¡El movimiento no se ha podido realizar!', 'Error!');
  }

}
