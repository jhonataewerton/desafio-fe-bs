import { SelectionModel } from '@angular/cdk/collections';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Customers } from 'src/app/models/customers/Customers';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.scss'],
})
export class CustomersTableComponent extends MatPaginatorIntl {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Output() deleteCustomerEvent = new EventEmitter<any>();
  @Input() contentTableData!: Customers[];

  dataSource = new MatTableDataSource<Customers>();

  displayedColumns: string[] = [
    'clientName',
    'cpf',
    'birthDate',
    'monthlyIncome',
    'email',
    'registrationDate',
    'action',
  ];
  selection = new SelectionModel<Customers>(true, []);

  ngOnInit(): void {
    console.log(this.contentTableData);
    this.dataSource = new MatTableDataSource<Customers>(this.contentTableData);
  }

  handleDeleteProduct(id: string): void {
    console.log(id)
    if (id) {
      this.deleteCustomerEvent.emit(id);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
