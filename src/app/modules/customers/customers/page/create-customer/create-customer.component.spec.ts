import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerComponent } from './create-customer.component';
import { CustomersHomeComponent } from '../customers-home/customers-home.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomersService } from 'src/app/services/customers/customers.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

class MockActivatedRoute {
  queryParams = of({}); // Simula um observable de queryParams vazio
}

describe('CreateCustomerComponent', () => {
  let component: CreateCustomerComponent;
  let fixture: ComponentFixture<CreateCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCustomerComponent, ButtonComponent],
      imports: [
        HttpClientModule,
        RouterModule,
        MatTableModule,
        MatDialogModule,
        ReactiveFormsModule,
        CurrencyMaskModule
      ],
      providers: [
        CustomersService,
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
