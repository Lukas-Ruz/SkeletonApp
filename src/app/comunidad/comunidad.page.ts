import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from '../models/lista.model';
import { Servicio } from '../service/servicio';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.page.html',
  styleUrls: ['./comunidad.page.scss'],
  standalone: false,
})
export class ComunidadPage implements OnInit{
  lista: Lista[] = [];

  constructor(private router: Router,
              private servicio: Servicio) { }

  ngOnInit(): void {
      this.lista  = this.servicio.getLista();
  }

}
