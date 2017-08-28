import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescriptionBoxComponent } from './product-description-box.component';

describe('ProductDescriptionBoxComponent', () => {
  let component: ProductDescriptionBoxComponent;
  let fixture: ComponentFixture<ProductDescriptionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDescriptionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDescriptionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
