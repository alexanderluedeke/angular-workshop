import {Component, NgModule, OnInit} from '@angular/core';
import { Product } from '../shared/product';
import {ProductDataService} from "../shared/product-data.service";
import {Subscription} from "rxjs/Subscription";
import {subscribeOn} from "rxjs/operator/subscribeOn";
import {Observable} from "rxjs/Observable";
import {observable} from "rxjs/symbol/observable";

@NgModule({
  providers: [
    ProductDataService
  ]
})
@Component({
  selector: 'idealo-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[];

  constructor(private productDataService: ProductDataService) {
  }

  ngOnInit() {
    this.productDataService.getProducts().subscribe(
      (successProducts: Product[]) => {
        this.products = successProducts;
      },
      () => {
        console.log("Can't access remote API!");
      }
    );
  }
}
