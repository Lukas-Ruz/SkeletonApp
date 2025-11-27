import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login',loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  { path: 'biblioteca', loadChildren: () => import('./biblioteca/biblioteca.module').then(m => m.BibliotecaPageModule) },
  { path: 'registrar', loadChildren: () => import('./registrar/registrar.module').then(m => m.RegistrarPageModule) },
  { path: 'comunidad', loadChildren: () => import('./comunidad/comunidad.module').then(m => m.ComunidadPageModule) },
  { path: 'buscar', loadChildren: () => import('./buscar/buscar.module').then(m => m.BuscarPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
