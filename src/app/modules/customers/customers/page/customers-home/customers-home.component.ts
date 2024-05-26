import { Subject, takeUntil } from 'rxjs';
import { CustomersService } from './../../../../../services/customers/customers.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetAllCustomersResponse } from 'src/app/models/customers/GetAllCustomersResponse';

@Component({
  selector: 'app-customers-home',
  templateUrl: './customers-home.component.html',
  styleUrls: ['./customers-home.component.scss'],
})
export class CustomersHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  public customerDatas: Array<GetAllCustomersResponse> = [];

  constructor(private customersService: CustomersService) {}

  ngOnInit(): void {
    this.getAPICustomersDatas();
  }

  getAPICustomersDatas() {
    this.customersService
      .getAllCustomers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.customerDatas = response;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log(this.customerDatas);
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
