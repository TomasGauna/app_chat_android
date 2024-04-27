import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';

const routes: Routes = [
  {
    path: 'home', component: SplashScreenComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'cuarto-a',
    loadChildren: () => import('./chats/cuarto-a/cuarto-a.module').then( m => m.CuartoAPageModule)
  },
  {
    path: 'cuarto-b',
    loadChildren: () => import('./chats/cuarto-b/cuarto-b.module').then( m => m.CuartoBPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
