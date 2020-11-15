import { Injectable } from '@angular/core';
import { BaseService } from './common/base.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {

  constructor(public http: HttpClient, public router: Router
  ) { super(http); }

  autenticar(usuario) {
    return super.post('login/', usuario);
  }

  entrar(usuario) {
    localStorage.setItem('mentor', JSON.stringify(usuario));
    // console.log('Entrou:', usuario);
    this.router.navigate(['home-user']);
  }

  logout() {
    localStorage.removeItem('mentor');
    this.router.navigate(['']);
  }

  getUser() {
    return JSON.parse(localStorage.getItem('mentor'));
  }
}
