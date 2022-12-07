import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { OrderNavComponent } from './order/order-nav/order-nav.component';



import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderItemComponent } from './order/order-item/order-item.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { MenuDetailComponent } from './menu-items/menu-detail/menu-detail.component';
import { MenuListComponent } from './menu-items/menu-list/menu-list.component';
import { MenuItemsItemComponent } from './menu-items/menu-items-item/menu-items-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    OrderComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OrderNavComponent,
    OrderListComponent,
    OrderItemComponent,
    MenuItemsComponent,
    MenuDetailComponent,
    MenuListComponent,
    MenuItemsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
