import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ShopPage } from '../pages/shop/shop';
import { OrderPage } from '../pages/order/order';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ItemCardComponent} from "../components/item-card/item-card.component";
import {ShoppingCartService} from "../services/shopping-cart/shopping-cart.service";
import {OrdersService} from "../services/api/orders/orders.service";
import {OrdersServiceImpl} from "../services/api/orders/orders-impl.service";
import {ItemsServiceImpl} from "../services/api/items/items-impl.service";
import {ItemsService} from "../services/api/items/items.service";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    ShopPage,
    OrderPage,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShopPage,
    OrderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: ItemsService, useClass: ItemsServiceImpl},
    {provide: OrdersService, useClass: OrdersServiceImpl},
    ShoppingCartService
  ]
})
export class AppModule {}
