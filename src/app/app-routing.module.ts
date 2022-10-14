import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IsLoggedGuard } from './services/guards/is-logged.guard';
import { IsNotLoggedGuard } from './services/guards/is-not-logged.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [IsLoggedGuard],
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'login',
    canActivate: [IsNotLoggedGuard],
    component: LoginComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
