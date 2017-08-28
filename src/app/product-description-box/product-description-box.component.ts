import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'idealo-product-description-box',
  templateUrl: './product-description-box.component.html',
  styleUrls: ['./product-description-box.component.css']
})
export class ProductDescriptionBoxComponent implements OnInit {
  @Input() headerTitle: string;

  public isHidden = true;

  public toggleBox(event: MouseEvent) {
    if (event.shiftKey) {
      this.isHidden = !this.isHidden;
    } else {
      alert('Nice try!');
    }
  }

  constructor() { }

  ngOnInit() {

  }
}
