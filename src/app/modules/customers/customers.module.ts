import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCustomerComponent } from './customers/page/create-customer/create-customer.component';
import { CustomersHomeComponent } from './customers/page/customers-home/customers-home.component';
import { CUSTOMERS_ROUTES } from './customers/customer.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CreateCustomerComponent, CustomersHomeComponent],
  imports: [CommonModule, RouterModule.forChild(CUSTOMERS_ROUTES)],
})
export class CustomersModule {}
