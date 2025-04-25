import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ArticlesMap } from '../POJOs/article';
ArticlesMap

@Component({
  selector: 'app-exportaciones',
  imports: [MatFormFieldModule,
    MatInputModule, MatSelectModule],
  templateUrl: './exportaciones.component.html',
  styleUrl: './exportaciones.component.css'
})
export class ExportacionesComponent {
  seleccionados: string[] = []; 
  columnas:string[]=["Sanchez","dimision","perrro","estafador","ladron","socialista","terrorista"]

  constructor(){

  }


}
