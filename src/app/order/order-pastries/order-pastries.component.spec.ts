import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPastriesComponent } from './order-pastries.component';

describe('OrderPastriesComponent', () => {
  let component: OrderPastriesComponent;
  let fixture: ComponentFixture<OrderPastriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPastriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderPastriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
