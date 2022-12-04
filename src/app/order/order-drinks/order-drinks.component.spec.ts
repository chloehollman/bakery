import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDrinksComponent } from './order-drinks.component';

describe('OrderDrinksComponent', () => {
  let component: OrderDrinksComponent;
  let fixture: ComponentFixture<OrderDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDrinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
