import { Component } from '@angular/core';
import { CustomersHomeComponent } from './page/customers-home/customers-home.component';
import { Routes } from '@angular/router';

export const CUSTOMERS_ROUTES: Routes = [
  {
    path: '',
    component: CustomersHomeComponent,
  },
];
