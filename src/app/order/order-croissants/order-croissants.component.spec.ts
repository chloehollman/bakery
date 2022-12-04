import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCroissantsComponent } from './order-croissants.component';

describe('OrderCroissantsComponent', () => {
  let component: OrderCroissantsComponent;
  let fixture: ComponentFixture<OrderCroissantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCroissantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCroissantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
