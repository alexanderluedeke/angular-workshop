import { Injectable } from '@angular/core';
import {Product} from "./product";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductDataService {

  private baseUrl = "http://localhost:4730/products";

  constructor(private http: HttpClient) {}

  getProducts() : Observable<Product[]> {
    return this.http.get(this.baseUrl);
  }

  getProduct(id : number) : Observable<Product> {
    return this.http.get(this.baseUrl + "/" + id);
  }

  // private products: Product[] = [
  //   {
  //     "id": 1,
  //     "title": "Samsung - Fernseher",
  //     "description": "Ein toller Fernseher",
  //     "price": 3399,
  //     "image": "http://via.placeholder.com/350x350"
  //   },
  //   {
  //     "id": 2,
  //     "title": "Apple - iphone",
  //     "description": "Wenn du kein iphone hast, dann hast du kein iphone",
  //     "price": 1299,
  //     "image": "http://via.placeholder.com/350x350"
  //   },
  //   {
  //     "id": 3,
  //     "title": "Klobürste",
  //     "description": "Dieses Wundergerät wird ihnen als Multifunktionswerkzeug dienste leisten",
  //     "price": 99,
  //     "image": "http://via.placeholder.com/350x350"
  //   }
  // ];
}
