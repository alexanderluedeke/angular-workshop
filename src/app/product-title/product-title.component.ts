import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'idealo-product-title',
  templateUrl: './product-title.component.html',
  styleUrls: ['./product-title.component.css']
})
export class ProductTitleComponent implements OnInit {

  constructor() { }

@Output() ping = new EventEmitter<string>();

  onClick() {
    this.ping.emit("ping!");
  }

  ngOnInit() {
  }

}
