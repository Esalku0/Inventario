import { Component, inject, Inject } from '@angular/core';
import { Proyectos, ProyectosMap } from '../POJOs/proyectos';
import { ProyectosService } from '../services/proyectos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    estado: ''
  };

  arrProyectos: Proyectos[] = [];
  proService: ProyectosService = inject(ProyectosService);
  popup: ToastrService = inject(ToastrService);

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
        estado: ""
      };

    });
  }


  borrarProyecto(id: number) {
    this.proService.deleteProyectosById(id).subscribe((data: any) => {
      if (data) {
        this.showSuccess();
        this.cargarProyectos();
      }else{
        this.showError();
      }
    });
  }

  showSuccess() {
    this.popup.success('¡Proyecto eliminado correctamente!', '¡Perfecto!');
  }

  showError() {
    this.popup.error('¡El borrado de proyecto no se ha podido realizar!', 'Error!');
  }

}
