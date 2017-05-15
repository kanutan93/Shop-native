import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {ShoppingCart} from "../../models/ShoppingCart";
import {Order} from "../../models/Order";
import {OrdersService} from "../../services/api/orders/orders.service";
import {ShoppingCartService} from "../../services/shopping-cart/shopping-cart.service";

@Component({
    selector: 'page-list',
    templateUrl: 'order.html'
})
export class ListPage {
    items: ShoppingCart[];
    order: Order = new Order;
    constructor(public navCtrl: NavController, public navParams: NavParams,
                private shoppingCartService: ShoppingCartService,
                private orderService: OrdersService,
                public alertCtrl: AlertController) {

    }

    ngOnInit() {
        this.items = this.shoppingCartService.getItems();
    }

    removeFromCart(name) {
        this.shoppingCartService.removeFromCart(name);
        this.items = this.items.filter((items) => {
            return items.name != name;
        });
    }

    checkout() {
        this.order.shoppingCart = this.items;
        this.orderService.createOrder(this.order);
        this.shoppingCartService.setNull();
        this.order = new Order;
        this.items = [];
        this.showSuccess();
    }

    showSuccess(){
        let alert = this.alertCtrl.create({
            title: 'Dear client!',
            subTitle: "Thank you for order. We'll reply soon.",
            buttons: ['OK']
        });
        alert.present();
    }
}
