import { Component } from '@angular/core';
import { CustomersHomeComponent } from './page/customers-home/customers-home.component';
import { Routes } from '@angular/router';
import { CreateCustomerComponent } from './page/create-customer/create-customer.component';

export const CUSTOMERS_ROUTES: Routes = [
  {
    path: '',
    component: CustomersHomeComponent,
  },

  {
    path: 'create-customer',
    component: CreateCustomerComponent,
  },
];
