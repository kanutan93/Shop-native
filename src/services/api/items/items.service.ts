import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Good} from "../../../models/Good";

export abstract class ItemsService {

  constructor(protected httpService: Http) { }

  abstract getGoods(page?: string, search?: string): Observable<Good[]>;
  abstract fetchGood(name: string): Good;
}
