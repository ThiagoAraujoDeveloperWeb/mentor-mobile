import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuOpened = false;
  active = 1;


  constructor(public router: Router,
              public authSrv: AuthenticationService) { }

  ngOnInit() {}

  menuClick(menu) {
    if (menu === this.active && this.menuOpened) {
      this.menuOpened = false;
    } else {
      this.menuOpened = true;
    }
    this.active = menu;
  }

  sair() {
    this.authSrv.logout();
  }

  dashboard() {
    this.router.navigate(['home-user/dashboard']);
  }

}
