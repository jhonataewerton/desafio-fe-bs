import { TestBed } from '@angular/core/testing';

import { CustomersService } from './customers.service';
import { HttpClient } from '@angular/common/http';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { GetAllCustomersResponse } from 'src/app/models/customers/GetAllCustomersResponse';
import { Customers } from 'src/app/models/customers/Customers';

describe('CustomersService', () => {
  let service: CustomersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CustomersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all customers', () => {
    const mockResponse: GetAllCustomersResponse[] = [
      {
        id: '1',
        clientName: 'Customer 1',
        cpf: '',
        birthDate: '',
        monthlyIncome: 0,
        registrationDate: '',
        email: '',
      },
      {
        id: '2',
        clientName: 'Customer 2',
        cpf: '',
        birthDate: '',
        monthlyIncome: 0,
        registrationDate: '',
        email: '',
      },
    ];

    service.getAllCustomers().subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(
      `${service['API_URL']}/customers`
    );
    expect(req.request.method).toEqual('GET');

    req.flush(mockResponse);
  });

  it('should create a customer', () => {
    const newCustomer: Customers = {
      id: '1',
      clientName: 'New Customer',
      cpf: '12312312312',
      birthDate: '',
      monthlyIncome: 0,
      registrationDate: '',
      email: '',
    };

    const mockResponse: GetAllCustomersResponse[] = [
      {
        id: '1',
        clientName: 'New Customer',
        cpf: '22312312312',
        birthDate: '',
        monthlyIncome: 0,
        registrationDate: '',
        email: '',
      },
    ];

    service.createCustomer(newCustomer).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(
      `${service['API_URL']}/customers`
    );
    expect(req.request.method).toEqual('POST');

    req.flush(mockResponse);
  });

  it('should edit a customer', () => {
    const updatedCustomer: Customers = {
      id: '1',
      clientName: 'Updated Customer',
      cpf: '',
      birthDate: '',
      monthlyIncome: 0,
      registrationDate: '',
      email: '',
    };

    const mockResponse: GetAllCustomersResponse[] = [
      {
        id: '1',
        clientName: 'Updated Customer',
        cpf: '',
        birthDate: '',
        monthlyIncome: 0,
        registrationDate: '',
        email: '',
      },
    ];

    service
      .editCustomer(updatedCustomer, updatedCustomer.id)
      .subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

    const req = httpTestingController.expectOne(
      `${service['API_URL']}/customers/${updatedCustomer.id}`
    );
    expect(req.request.method).toEqual('PUT');

    req.flush(mockResponse);
  });

  it('should delete a customer', () => {
    const customerId = '123';

    const mockResponse = { success: true };

    service.deleteCustomer(customerId).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(
      `${service['API_URL']}/customers/${customerId}`
    );
    expect(req.request.method).toEqual('DELETE');

    req.flush(mockResponse);
  });
});
