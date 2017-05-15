import { Component } from '@angular/core';
import {Good} from "../../models/Good";
import {ItemsService} from "../../services/api/items/items.service";
import {ShoppingCartService} from "../../services/shopping-cart/shopping-cart.service";

@Component({
  selector: 'page-home',
  templateUrl: 'shop.html'
})
export class ShopPage {
  goods: Array<Good> = [];
  constructor(private itemsService: ItemsService,
              private shoppingCartService: ShoppingCartService) {
    this.itemsService.getGoods("").subscribe((res) => {
      this.goods = res;
      console.log(this.goods);
    });
  }

  addToCart(shoppingCart){
    this.shoppingCartService.addToCart(shoppingCart);
  }
}
