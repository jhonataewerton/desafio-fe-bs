import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { GetAllCustomersResponse } from 'src/app/models/customers/GetAllCustomersResponse';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<Array<GetAllCustomersResponse>> {
    return this.http.get<Array<GetAllCustomersResponse>>(
      `${this.API_URL}/customers`
    );
  }
}
