import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OrderAllComponent } from './order/order-all/order-all.component';
import { OrderCroissantsComponent } from './order/order-croissants/order-croissants.component';
import { OrderPastriesComponent } from './order/order-pastries/order-pastries.component';
import { OrderComponent } from './order/order.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent},
  { path: 'order', component: OrderComponent, children: [
    { path: 'all', component: OrderAllComponent },
    { path: 'croissants', component: OrderCroissantsComponent },
    { path: 'pastries', component: OrderPastriesComponent }
  ]

},
  {path: 'about', component: AboutComponent },
  {path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
