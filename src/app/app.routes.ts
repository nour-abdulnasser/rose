import { Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    loadComponent: () => import('./features/pages/home/home.component')
      .then(m => m.HomeComponent)
  }
];
