import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomersGridComponent } from './customers-grid/customers-grid.component';
import { CustomersCardComponent } from './customers-card/customers-card.component';
import { CustomersMapComponent } from './customers-map/customers-map.component';

const cRoutes: Routes = [
  // { path: '', component: CustomersComponent }

];

@NgModule({
  imports: [ RouterModule.forChild(cRoutes) ],
  exports: [ RouterModule ]
})

export class CRoutingModule {
  static components = [ CustomersComponent, CustomersCardComponent, CustomersGridComponent, CustomersMapComponent ];
}
