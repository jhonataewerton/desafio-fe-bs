import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';
import { GetAllCustomersResponse } from 'src/app/models/customers/GetAllCustomersResponse';

@Injectable({
  providedIn: 'root',
})
export class CustomersDataTransferService {
  public customersDataEmiiter$ =
    new BehaviorSubject<Array<GetAllCustomersResponse> | null>(null);
  public customerDatas: Array<GetAllCustomersResponse> = [];

  setCustomerDatas(customerDatas: Array<GetAllCustomersResponse>): void {
    if (customerDatas) {
      this.customersDataEmiiter$.next(customerDatas);
    }
  }

  getCustomerDatas() {
    this.customersDataEmiiter$.subscribe({
      next: (response) => {
        if (response) {
          this.customerDatas = response;
        }
      },
    });
    return this.customerDatas;
  }
}
