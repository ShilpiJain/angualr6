import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CRoutingModule } from './customers.routing';

import { CustomersComponent } from './customers.component';
import { CustomersCardComponent } from './customers-card/customers-card.component';
import { CustomersGridComponent } from './customers-grid/customers-grid.component';
import { CustomersMapComponent } from './customers-map/customers-map.component';


import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CustomersCardComponent,
    CustomersGridComponent,
    CustomersMapComponent
  ],
  exports: [CustomersCardComponent, CustomersGridComponent, CustomersMapComponent],
  imports: [
    BrowserModule, CommonModule, CRoutingModule
  ],
  providers: [],
  bootstrap: [CustomersComponent]
})
export class CustomersModule { }
