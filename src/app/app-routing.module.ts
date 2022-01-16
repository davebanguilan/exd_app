import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo, AuthPipe } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = (): AuthPipe => redirectUnauthorizedTo(['login']);

const redirectLoggedInToApp = (): AuthPipe => redirectLoggedInTo(['tabs']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule),
    ...canActivate(redirectLoggedInToApp)
  },
  {
    path: 'login',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule),
    ...canActivate(redirectLoggedInToApp)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
