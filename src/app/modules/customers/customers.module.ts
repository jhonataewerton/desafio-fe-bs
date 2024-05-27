import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCustomerComponent } from './customers/page/create-customer/create-customer.component';
import { CustomersHomeComponent } from './customers/page/customers-home/customers-home.component';
import { CUSTOMERS_ROUTES } from './customers/customer.routing';
import { RouterModule } from '@angular/router';

import { CustomersTableComponent } from './customers/components/customers-table/customers-table.component';

import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [CreateCustomerComponent, CustomersHomeComponent, CustomersTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CUSTOMERS_ROUTES),
    // Material
    MatTableModule,
    MatCheckboxModule
  ],
})
export class CustomersModule {}
