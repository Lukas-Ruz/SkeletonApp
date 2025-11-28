import { Injectable } from '@angular/core';
import { Lista} from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class Servicio {
  private lista: Lista[] = []; // ArrayList simulado

  constructor() { }

  setLista(lista: Lista): void {
    this.lista.push(lista);
  }

  getLista(): Lista[] {
    return this.lista;
  }
}
