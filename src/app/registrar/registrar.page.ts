import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Servicio } from '../service/servicio';
import { Router } from '@angular/router';
import { Lista } from '../models/lista.model';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
  standalone: false,
})
export class RegistrarPage {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder,
    private servicio: Servicio,
    private router: Router) { this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      descripcion: ['', Validators.required],
      integrantes: ['', Validators.required], // Separados por comas
      estilo: ['', Validators.required]
    });
    }

      onSubmit(): void {
    if (this.registroForm.valid) {
      const formValue = this.registroForm.value;
      const lista: Lista = {
        nombre: formValue.nombre,
        fechaInicio: new Date(formValue.fechaInicio),
        descripcion: formValue.descripcion,
        integrantes: formValue.integrantes.split(',').map((i: string) => i.trim()), // Convertir a array
        estilo: formValue.estilo
      };
      this.servicio.setLista(lista);
      this.router.navigate(['/comunidad']);
    }}


}
