import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/pages/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('./features/pages/all-categories/all-categories.component').then(
        (m) => m.AllCategoriesComponent
      ),
  },
];
