import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routingModule } from './routing/routing'
// import { CustomersModule } from './customers/customers.module'
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CoreComponent } from './core/core.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { NavComponent } from './core/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CoreComponent,
    CustomerComponent,
    CustomersComponent,
    OrdersComponent,
    NavComponent
    // CustomersModule
  ],
  imports: [
    BrowserModule,routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
