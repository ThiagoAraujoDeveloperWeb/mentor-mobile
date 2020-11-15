import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeUserComponent } from './home-user/home-user.component';

import { DashboardComponent } from './home-user/dashboard/dashboard.component';
import { MenuComponent } from './home-user/menu/menu.component';

import { UserGuard } from './_guards/user.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginUserComponent
  },
  {
    path: 'home-user',
    component: HomeUserComponent,
    canActivate: [UserGuard], children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'menu', component: MenuComponent }
    ]
  }

  // {
  //     path: 'dashboard', component: DashboardComponent, canActivate: [UserGuard], children: [
  //       { path: 'home-user', component: HomeUserComponent }
  //     ]
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
