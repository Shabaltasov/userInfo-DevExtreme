import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./core/pages/main-page/main-page.module').then(m => m.MainPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./core/pages/about-page/about-page.module').then(m => m.AboutPageModule)
  },
  {
    path:'**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
