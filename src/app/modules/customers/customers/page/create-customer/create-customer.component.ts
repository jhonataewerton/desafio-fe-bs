import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CustomersService } from 'src/app/services/customers/customers.service';
import { ageValidator } from 'src/app/shared/validators/ageValidator';
import { cpfValidator } from 'src/app/shared/validators/cpfValidator';
import { nameValidator } from 'src/app/shared/validators/nameValidator';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss'],
})
export class CreateCustomerComponent implements OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();

  public createCustomerForm = this.formBuilder.group({
    clientName: ['', [Validators.required, nameValidator()]],
    cpf: ['', [Validators.required, cpfValidator()]],
    birthDate: [null, [Validators.required, ageValidator(18, 60)]],
    monthlyIncome: [0, [Validators.required, Validators.min(10)]],
    registrationDate: [new Date(), Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomersService,
    private router: Router
  ) {}

  onSubmitCreateCustomerForm(): void {
    if (this.createCustomerForm.value && this.createCustomerForm.valid) {
      this.createCustomerForm.patchValue({ registrationDate: new Date() });
      this.customerService
        .createCustomer(this.createCustomerForm.value as any)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            this.router.navigate(['/customers']);
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }

  clearCustomerForm(): void {
    this.createCustomerForm.reset({
      clientName: '',
      cpf: '',
      birthDate: null,
      registrationDate: new Date(),
      monthlyIncome: 0,
      email: '',
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
