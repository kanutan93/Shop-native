import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Order} from "../../../models/Order";

export abstract class OrdersService {

  constructor(protected httpService: Http) { }

  abstract createOrder(order: Order): void;
}
