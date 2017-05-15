import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Good} from "../../models/Good";

@Component({
  selector: 'item-card',
  templateUrl: 'item-card.component.html'
})
export class ItemCardComponent implements OnInit {
  @Input() item: Good;
  @Output() addToCartClk: EventEmitter<{name: string, price: number, count: number}> = new EventEmitter<{name: string, price: number, count: number}>();
  constructor() { }

  ngOnInit() {
  }

  addToCart(name, price, count){
    this.addToCartClk.emit({name: name, price: price, count: count});
  }
}
