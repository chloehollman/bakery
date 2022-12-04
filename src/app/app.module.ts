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
import { OrderAllComponent } from './order/order-all/order-all.component';


import { OrderDrinksComponent } from './order/order-drinks/order-drinks.component';
import { OrderCroissantsComponent } from './order/order-croissants/order-croissants.component';
import { OrderPastriesComponent } from './order/order-pastries/order-pastries.component';

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
    OrderAllComponent,
    OrderDrinksComponent,
    OrderCroissantsComponent,
    OrderPastriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
