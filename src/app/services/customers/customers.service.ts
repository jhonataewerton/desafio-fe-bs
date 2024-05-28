import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Customers } from 'src/app/models/customers/Customers';
import { GetAllCustomersResponse } from 'src/app/models/customers/GetAllCustomersResponse';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  createCustomer(
    customer: Customers
  ): Observable<Array<GetAllCustomersResponse>> {
    return this.http.post<Array<GetAllCustomersResponse>>(
      `${this.API_URL}/customers`,
      customer
    );
  }

  editCustomer(
    customer: Customers,
    id: string
  ): Observable<Array<GetAllCustomersResponse>> {
    return this.http.put<Array<GetAllCustomersResponse>>(
      `${this.API_URL}/customers/${id}`,
      customer
    );
  }

  getAllCustomers(): Observable<Array<GetAllCustomersResponse>> {
    return this.http.get<Array<GetAllCustomersResponse>>(
      `${this.API_URL}/customers`
    );
  }

  deleteCustomer(id: string): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/customers/${id}`);
  }
}
