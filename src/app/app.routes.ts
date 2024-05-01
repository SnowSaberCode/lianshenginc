import { Routes } from '@angular/router';

export const routes: Routes = [  
  {
    path: 'home',
    loadComponent: () => import('./components/content-shell/home-page/home-page.component')
  },
  {
    path: 'product-list',
    loadComponent: () => import('./components/content-shell/product-list/product-list.component')
  },
  {
    path: 'about-me',
    loadComponent: () => import('./components/content-shell/about-me/about-me.component')
  },
  {
    path: 'contact-me',
    loadComponent: () => import('./components/content-shell/contact-me/contact-me.component')
  },
  {
    path:'**',
    redirectTo: 'home',
  }
];
