import { Component, OnInit } from '@angular/core';
import {Product} from "../../shared/product";
import {ActivatedRoute} from "@angular/router";
import {ProductDataService} from "../../shared/product-data.service";

@Component({
  selector: 'idealo-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productDataService: ProductDataService) {}

  product: Product;

  ngOnInit() {
    this.route.params.subscribe((params) => {
        this.productDataService.getProduct(params.id).subscribe(
          (successProduct: Product) => {
            this.product = successProduct;
          },
          () => {
            console.log("Can't access remote API!");
          });
      }
    );
  }

  public save() {
    // We do use the two way binding instead!
    console.log(this.product);
  }

}
