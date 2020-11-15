import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from "../_services/authentication.service";

@Injectable({
  providedIn: 'root'
})

export class UserGuard implements CanActivate {
  constructor(
    public router: Router,
    public authSrv: AuthenticationService
  ) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const usuario = this.authSrv.getUser();

    if (!usuario) {
      this.router.navigate(['']);

      return false;
    }

    if (usuario.role === 'user') {
      console.log('Role é == USER');
      return true;
    }
    alert('Seu perfil não está autorizado a acessar essa página')

    // this.router.navigate(['home-user/folder']);

    return false;
  }
}