import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
  standalone: false,
})
export class BuscarPage {

  constructor(private router: Router) {}

  // Método para navegar a Demo
  navDemo() {
    this.router.navigate(['/demo']);
  }
  // Método para navegar a Biblioteca
  navBiblioteca() {
    this.router.navigate(['/biblioteca']);
  }
  // Método para navegar a Registrar
  navRegistrar() {
    this.router.navigate(['/registrar']);
  }
  // Método para navegar a Buscar
  navBuscar() {
    this.router.navigate(['/buscar']);
  }

}
