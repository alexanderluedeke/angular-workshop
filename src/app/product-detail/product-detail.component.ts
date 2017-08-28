import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ProductDataService} from "../shared/product-data.service";
import {Product} from "../shared/product";

@Component({
  selector: 'idealo-product-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

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
}
