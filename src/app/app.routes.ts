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
      .then(c => c.HomeComponent)
  },
  { 
    path: 'category', 
    loadComponent: () => import('./features/pages/category/category.component')
      .then(c => c.CategoryComponent)
  } ,
  { 
    path: 'category', 
    loadComponent: () => import('./features/pages/category/category.component')
      .then(c => c.CategoryComponent)
  },
  { 
    path: 'about', 
    loadComponent: () => import('./features/pages/about/about.component')
      .then(c => c.AboutComponent)
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./features/pages/contact/contact.component')
      .then(c => c.ContactComponent)
  },
  { 
    path: 'delivery', 
    loadComponent: () => import('./features/pages/delivery/delivery.component')
      .then(c => c.DeliveryComponent)
  },
  { 
    path: 'policy', 
    loadComponent: () => import('./features/pages/policy/policy.component')
      .then(c => c.PolicyComponent)
  },
  { 
    path: 'FAQs', 
    loadComponent: () => import('./features/pages/faqs/faqs.component')
      .then(c => c.FAQsComponent)
  },
  
];
