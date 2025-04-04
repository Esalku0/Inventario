import { Component, inject, Inject } from '@angular/core';
import { Proyectos, ProyectosMap } from '../POJOs/proyectos';
import { ProyectosService } from '../services/proyectos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  imports: [FormsModule, CommonModule, RouterLink, RouterModule, RouterOutlet],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})

export class ProyectosComponent {

  newProyecto: Proyectos = {
    idProyecto: 0,
    nombre: '',
    descrip: '',
    cliente: '',
    estado:''
  };

  arrProyectos: Proyectos[] = [];
  proService: ProyectosService = inject(ProyectosService);

  constructor() {
    this.cargarProyectos();
  }

  cargarProyectos() {
    this.proService.getAllProyectos().subscribe((data: any) => {
      this.arrProyectos = new ProyectosMap().get(data);
    });
  }

  anyadirProyecto() {
    this.proService.addProyecto(this.newProyecto).subscribe((data: any) => {
      this.cargarProyectos();
      this.newProyecto = {
        idProyecto: 0,
        nombre: '',
        descrip: '',
        cliente: '',
        estado:""
      };

    });
  }


}
