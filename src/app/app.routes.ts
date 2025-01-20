import { Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
import { HomeComponent } from './core/layouts/home/home.component';
// import {}
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // popular-items tryout
];
