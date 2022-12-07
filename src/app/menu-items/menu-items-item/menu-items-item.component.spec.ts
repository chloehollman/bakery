import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemsItemComponent } from './menu-items-item.component';

describe('MenuItemsItemComponent', () => {
  let component: MenuItemsItemComponent;
  let fixture: ComponentFixture<MenuItemsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
