import { Subject, takeUntil } from 'rxjs';
import { CustomersService } from './../../../../../services/customers/customers.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetAllCustomersResponse } from 'src/app/models/customers/GetAllCustomersResponse';
import { CustomersDataTransferService } from 'src/app/shared/services/customers/customers-data-transfer.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-customers-home',
  templateUrl: './customers-home.component.html',
  styleUrls: ['./customers-home.component.scss'],
})
export class CustomersHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  public customerDatas: Array<GetAllCustomersResponse> = [];

  constructor(
    private customersService: CustomersService,
    private customersDtService: CustomersDataTransferService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAPICustomersDatas();
  }

  getAPICustomersDatas() {
    this.customersService
      .getAllCustomers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          console.log(response);
          this.customerDatas = response;
          this.customersDtService.setCustomerDatas(this.customerDatas);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  handleDeleteCustomerAction(event: string): void {
    console.log('PRODUTO DELETADO', event);
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      height: '286px',
      width: '382px'
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
