import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';

import { HomeUserComponent } from './home-user.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [HomeUserComponent, MenuComponent],
  entryComponents: [],
  imports: [
    IonicModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }]
})
export class HomeModule {}
