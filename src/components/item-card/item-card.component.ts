import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Good} from "../../models/Good";

@Component({
  selector: 'item-card',
  templateUrl: 'item-card.component.html'
})
export class ItemCardComponent implements OnInit {
  @Input() item: Good;
  constructor() { }

  ngOnInit() {
  }
}
