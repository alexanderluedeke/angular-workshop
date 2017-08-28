import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../shared/product";
import {Router} from "@angular/router";

/**
 * ToDo: You have to implement a two way binding on your on.
 */

@Component({
  selector: 'idealo-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  product: Product;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  onSubmit(form) {
    console.log(form.value)
    this.router.navigate(['/products']);
  }

}
