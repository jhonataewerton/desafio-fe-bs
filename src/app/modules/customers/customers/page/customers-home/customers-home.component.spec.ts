import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersHomeComponent } from './customers-home.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomersService } from 'src/app/services/customers/customers.service';
import { CustomersDataTransferService } from 'src/app/shared/services/customers/customers-data-transfer.service';
import { CustomersTableComponent } from '../../components/customers-table/customers-table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { GetAllCustomersResponse } from 'src/app/models/customers/GetAllCustomersResponse';

describe('CustomersHomeComponent', () => {
  let component: CustomersHomeComponent;
  let fixture: ComponentFixture<CustomersHomeComponent>;
  let customersService: jasmine.SpyObj<CustomersService>;

  beforeEach(async () => {
    customersService = jasmine.createSpyObj('CustomersService', ['deleteCustomer']);
    await TestBed.configureTestingModule({
      declarations: [CustomersHomeComponent, CustomersTableComponent, ButtonComponent],
      imports: [HttpClientModule, MatDialogModule, MatPaginatorModule, MatTableModule, BrowserAnimationsModule],
      providers: [CustomersService, CustomersDataTransferService, ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
