import { Component, inject } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Categories, CategoriesMap } from '../POJOs/categories';
import { FormsModule } from '@angular/forms';
import { Articles } from '../POJOs/article';
import { Types } from '../POJOs/types';
import { TypesService } from '../services/types.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ArticulosService } from '../services/articulos.service';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [FormsModule, CommonModule, RouterLink, RouterModule, RouterOutlet],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  catService: CategoriesService = inject(CategoriesService);

  newCategory: Categories = {
    idCategory: 0,
    name: '',
    descrip: '',
  };

  arrCategories: Categories[] = [];

  constructor() {
    this.loadAllCategories();
  }

  loadAllCategories() {
    this.catService.getAllCategorias().subscribe((data: any) => {
      this.arrCategories = new CategoriesMap().get(data);
      
    });
  }

  addNewCategory() {
    this.catService.addNewCategory(this.newCategory).subscribe(()=>{
      this.loadAllCategories();
    });
    // this.refresh();
  }

}
