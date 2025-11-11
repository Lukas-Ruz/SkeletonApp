import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent{
  
  showTabs: boolean = true;
  private animation!: Animation;

  constructor(private router: Router, private animationCtrl: AnimationController) { 
    
    // Tabs para la aplicación completa
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        console.log('NavigationEnd - URL:', event.url);
        this.updateShowTabs(event.url);
      });
  }

  // Animacion
  @ViewChild('persiana', { read: ElementRef }) persiana!: ElementRef<HTMLImageElement>;
  
  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.persiana.nativeElement)
      .duration(1200)  // Duración en ms
      .iterations(1) 
      .keyframes([
        { offset: 0, transform: 'translateY(-100%)', opacity: '1' },  // Inicio
        { offset: 0.5, transform: 'translateY(0)', opacity: '1' },     // Mitad
        { offset: 1, transform: 'translateY(-100%)', opacity: '1' }    // Fin
      ]);
  }
  
  // Usar tabs en todas las páginas
  ngOnInit() {
    console.log('ngOnInit - Initial URL:', this.router.url);
    this.updateShowTabs(this.router.url);
  }

  private updateShowTabs(url: string) {
    this.showTabs = url !== '/';
  }

  // Método para navegar a Biblioteca
  navBiblioteca() {
    this.router.navigate(['/biblioteca']);
    this.animation.play();  
  }

  // Método para navegar a Registrar
  navRegistrar() {
    this.router.navigate(['/registrar']);
    this.animation.play();  
  }

  // Método para navegar a Buscar
  navBuscar() {
    this.router.navigate(['/buscar']);
    this.animation.play();  
  }

  // Método para navegar a Comunidad
  navComunidad() {
    this.router.navigate(['/comunidad']);
    this.animation.play();  
  }
}