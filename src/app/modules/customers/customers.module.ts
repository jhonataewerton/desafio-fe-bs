import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCustomerComponent } from './customers/page/create-customer/create-customer.component';
import { CustomersHomeComponent } from './customers/page/customers-home/customers-home.component';
import { CUSTOMERS_ROUTES } from './customers/customer.routing';
import { RouterModule } from '@angular/router';

import { CustomersTableComponent } from './customers/components/customers-table/customers-table.component';

import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    CreateCustomerComponent,
    CustomersHomeComponent,
    CustomersTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(CUSTOMERS_ROUTES),
    // Material
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
  ],
})
export class CustomersModule {}
