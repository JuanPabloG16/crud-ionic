import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'modal-agregar',
    loadComponent: () => import('./modal-agregar/modal-agregar.page').then( m => m.ModalAgregarPage)
  },
  {
    path: 'modal-editar',
    loadComponent: () => import('./modal-editar/modal-editar.page').then( m => m.ModalEditarPage)
  },

];
