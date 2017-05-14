import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Good} from "../../models/Good";
import {ItemsService} from "../../services/api/items/items.service";

@Component({
  selector: 'page-home',
  templateUrl: 'shop.html'
})
export class ShopPage {
  goods: Array<Good> = [];
  constructor(public navCtrl: NavController, private itemsService: ItemsService) {
    this.itemsService.getGoods("").subscribe((res) => {
      this.goods = res;
      console.log(this.goods);
    });
  }

}
