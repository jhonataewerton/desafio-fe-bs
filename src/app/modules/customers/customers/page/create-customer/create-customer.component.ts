import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { EditCustomer } from 'src/app/models/customers/EditCustomer';
import { CustomersService } from 'src/app/services/customers/customers.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { ageValidator } from 'src/app/shared/validators/ageValidator';
import { cpfValidator } from 'src/app/shared/validators/cpfValidator';
import { nameValidator } from 'src/app/shared/validators/nameValidator';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss'],
})
export class CreateCustomerComponent implements OnDestroy, OnInit {
  private readonly destroy$: Subject<void> = new Subject();
  customerEditData: EditCustomer = {
    clientName: '',
    birthDate: new Date(),
    cpf: '',
    email: '',
    id: '',
    isEdit: false,
    monthlyIncome: 0,
    registrationDate: new Date(),
  };

  public createCustomerForm = this.formBuilder.group({
    clientName: ['', [Validators.required, nameValidator()]],
    cpf: ['', [Validators.required, cpfValidator()]],
    birthDate: [new Date(), [Validators.required, ageValidator(18, 60)]],
    monthlyIncome: [0, [Validators.required, Validators.min(10)]],
    registrationDate: [new Date(), Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomersService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.customerEditData = params as EditCustomer;
    });

    if (this.customerEditData.isEdit) {
      this.createCustomerForm.patchValue({
        clientName: this.customerEditData.clientName,
        cpf: this.customerEditData.cpf,
        birthDate: this.customerEditData.birthDate,
        monthlyIncome: this.customerEditData.monthlyIncome,
        registrationDate: this.customerEditData.registrationDate,
        email: this.customerEditData.email,
      });
    }
  }

  onSubmitCreateCustomerForm(): void {
    if (this.createCustomerForm.value && this.createCustomerForm.valid) {
      this.createCustomerForm.patchValue({ registrationDate: new Date() });
      this.customerService
        .createCustomer(this.createCustomerForm.value as any)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            this.showConfirmationDialog(
              'Cliente cadastrado com Sucesso!',
              false
            );
            this.router.navigate(['/customers']);
          },
          error: (err) => {
            this.showConfirmationDialog(
              `'Erro ao cadastrar!'${err.message}`,
              true
            );
          },
        });
    }
  }

  onSubmitEditCustomerFrom(): void {
    this.customerService
      .editCustomer(
        this.createCustomerForm.value as any,
        this.customerEditData.id
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.showConfirmationDialog('Cliente editado com Sucesso!', false);
          this.router.navigate(['/customers']);
        },
        error: (err) => {
          this.showConfirmationDialog(
            `'Erro ao cadastrar!'${err.message}`,
            true
          );
        },
      });
  }

  showConfirmationDialog(message: string, isError: boolean) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      height: '286px',
      width: '382px',
      data: {
        text: message,
        isError: isError,
      },
    });
  }

  clearCustomerForm(): void {
    this.createCustomerForm.patchValue({
      clientName: '',
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
