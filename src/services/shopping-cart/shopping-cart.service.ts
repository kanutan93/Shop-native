import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import 'rxjs/add/operator/map';
import {ShoppingCart} from "../../models/ShoppingCart";

@Injectable()
export class ShoppingCartService{
  items: ShoppingCart[] = [];
  items$:Subject<ShoppingCart[]> = new Subject<ShoppingCart[]>();
  constructor() {
  }

  addToCart(item: ShoppingCart): void{
    let isExisting = false;
    this.items.map(existingItem => {
      if(item.name === existingItem.name){
        existingItem.count = Number(existingItem.count) + Number(item.count);
        isExisting = true;
      }
    });
    if (!isExisting){
      this.items.push(item);
    }
    this.items$.next(this.items);
  }

  getCart(): Subject<ShoppingCart[]>{
    return this.items$;
  }

  getItems():ShoppingCart[]{
    return this.items;
  }

  removeFromCart(name): void{
    this.items = this.items.filter((items) => {
      return items.name != name;
    });
    this.items$.next(this.items);
  }

  setNull():void{
    this.items = [];
    this.items$.next(this.items);
  }
}
