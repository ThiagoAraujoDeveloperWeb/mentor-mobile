import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

import { MenuController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss'],
})
export class HomeUserComponent implements OnInit {
  menuOpened = false;
  active = 1;

  constructor(
    public router: Router,
    public authService: AuthenticationService,
    private menu: MenuController
  ) { }

  ngOnInit(
  ) {}

  menuClick(menu) {
    if (menu === this.active && this.menuOpened) {
      this.menuOpened = false;
    } else {
      this.menuOpened = true;
    }
    this.active = menu;
  }

  sair() {
    this.authService.logout();
  }

  dashboard() {
    this.router.navigate(['home-user/dashboard']);
  }

}
