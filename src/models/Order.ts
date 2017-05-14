import {ShoppingCart} from "./ShoppingCart";
export class Order {
  name: string;
  lastname: string;
  email:string;
  address: string;
  shoppingCart: Array<ShoppingCart>;
}
