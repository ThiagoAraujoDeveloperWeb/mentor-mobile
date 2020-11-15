import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent implements OnInit {
  formulario: FormGroup;
  usuario = {
    username: '',
    password: ''
  }

  constructor(
    public authService: AuthenticationService,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  insertUsername(event) {
    this.usuario.username = event.target.value
    console.log()
  }

  insertPassword(event) {
    this.usuario.password = event.target.value
  }

  login() {
    if (this.usuario.username !== '' && this.usuario.password !== '') {
      this.authService.autenticar(this.usuario).then((response: any) => {
        this.authService.entrar(response);
       
      }).catch((error: any) => {
        console.log('ERRO', error);
      });
    } else {
      console.log('ERRO', this.usuario);
    }
  }

  logout() {
    this.authService.logout();
  }

}
