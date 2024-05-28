import { Subject, takeUntil } from 'rxjs';
import { CustomersService } from './../../../../../services/customers/customers.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetAllCustomersResponse } from 'src/app/models/customers/GetAllCustomersResponse';
import { CustomersDataTransferService } from 'src/app/shared/services/customers/customers-data-transfer.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { Customers } from 'src/app/models/customers/Customers';
import { Router } from '@angular/router';
import { EditCustomer } from 'src/app/models/customers/EditCustomer';

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
    public dialog: MatDialog,
    private router: Router
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
          this.customerDatas = response;
          this.customersDtService.setCustomerDatas(this.customerDatas);
        },
        error: (err) => {},
      });
  }

  handleDeleteCustomerAction(event: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '286px',
      width: '382px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 's') {
        this.deleteCustomer(event);
      }
    });
  }

  handleEditCustomerAction(event: EditCustomer): void {
    this.router.navigate(['/customers/create-customer'], {
      queryParams: { ...event, isEdit: true },
    });
  }

  deleteCustomer(id: string) {
    if (id) {
      this.customersService
        .deleteCustomer(id)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            this.getAPICustomersDatas();
          },
          error: (err) => {},
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
