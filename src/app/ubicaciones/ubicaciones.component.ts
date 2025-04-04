import { Component, inject } from '@angular/core';
import { Ubicaciones, UbicacionesMap } from '../POJOs/ubicaciones';
import { UbicacionesService } from '../services/ubicaciones.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ubicaciones',
  imports: [FormsModule, CommonModule, RouterLink, RouterModule, RouterOutlet],
  templateUrl: './ubicaciones.component.html',
  styleUrl: './ubicaciones.component.css'
})

export class UbicacionesComponent {

  newUbicacion: Ubicaciones = {
    id: 0,
    codigoUbicacion: '',
    descrip: ''
  }
  arrUbicaciones: Ubicaciones[] = [];
  ubiService: UbicacionesService = inject(UbicacionesService);

  constructor() {
    this.cargarTodasUbicaciones();
  }

  cargarTodasUbicaciones() {
    this.ubiService.getAllUbicaciones().subscribe((data: any) => {
      this.arrUbicaciones = new UbicacionesMap().get(data);
    });
  }


  anyadirUbicacion() {
    this.ubiService.addUbicacion(this.newUbicacion).subscribe((data: any) => {
      this.cargarTodasUbicaciones();
      this.newUbicacion = {
        id: 0,
        codigoUbicacion: '',
        descrip: ''
      }

    });
  }


}
