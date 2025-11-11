import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit{

  email: string = '';
  password: string = '';
  private animation!: Animation;

  constructor(private alertcontroller: AlertController, private router: Router, private animationCtrl: AnimationController ) { }

ngOnInit(): void {}

  // Animación
  @ViewChild('guitarra', { read: ElementRef }) guitarra!: ElementRef<HTMLImageElement>;

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.guitarra.nativeElement)
      .duration(3000)  // Duración de 3 segundos por giro completo (ajusta para más rápido/lento)
      .iterations(Infinity)  // Infinita
      .keyframes([
        { offset: 0, transform: 'rotate(0deg)' },     // Inicio: sin rotación
        { offset: 1, transform: 'rotate(360deg)' }    // Fin: giro completo
      ]);
    
    // Inicia la animación automáticamente
    this.animation.play();
  }


// Mensaje error
async mostrarAlerta(mensaje: string){
  const alert = await this.alertcontroller.create({
    header: "ERROR",
    message: mensaje,
    buttons: ['OK']
  });
  await alert.present();
}

//Validar Email
validarEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

login() {
  // Verificar que el campo de correo no esté vacío
  if (!this.email) {
    this.mostrarAlerta('El campo de correo no puede estar vacío.');
    return;
  }

  // Validar el formato del correo
  if (!this.validarEmail(this.email)) {
    this.mostrarAlerta('El formato del correo es inválido.');
    return;
  }

  // Verificar que la contraseña no esté vacía
  if (!this.password) {
    this.mostrarAlerta('El campo de contraseña no puede estar vacío.');
    return;
  }

  // Verificar que la contraseña tenga mínimo 6 caracteres
  if (this.password.length < 6) {
    this.mostrarAlerta('La contraseña debe tener mínimo 6 caracteres.');
    return;
  }

  // Si todas las validaciones son correctas, navega a la página "Demo"
  this.router.navigate(['/demo'], { state: { user: this.email } });
}

}
