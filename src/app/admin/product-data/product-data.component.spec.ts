import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDataComponent } from './product-data.component';

describe('ProductDataComponent', () => {
  let component: ProductDataComponent;
  let fixture: ComponentFixture<ProductDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDataComponent]
    });
    fixture = TestBed.createComponent(ProductDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
