import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list',
    loadChildren: () => import('./pages/list/list.module')
                          .then( m => m.ListPageModule),
                          ...canActivate(redirectUnauthorizedTo(['login'])) },
  { path: 'create-item',
    loadChildren: () => import('./pages/form/form.module')
                          .then( m => m.FormPageModule) },
  { path: 'edit-item/:id',
    loadChildren: () => import('./pages/form/form.module')
                          .then( m => m.FormPageModule) },
  { path: 'login',
    loadChildren: () => import('./pages/login/login.module')
                          .then(m=>m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
