import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customers } from 'src/app/models/customers/Customers';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.scss'],
})
export class CustomersTableComponent implements OnInit {
  teste = [
    {
      id: '5fb4c058-7f71-44ed-a674-a8841042dc07',
      clientName: 'August',
      cpf: '111111111111',
      birthDate:
        'Wed Aug 07 1957 16:24:16 GMT-0300 (Horário Padrão de Brasília)',
      monthlyIncome: 7095.15,
      registrationDate:
        'Thu Jul 11 2024 11:33:30 GMT-0300 (Horário Padrão de Brasília)',
      email: 'Madalyn_Brakus@gmail.com',
    },
    {
      id: '3db95db4-d88e-4ab6-9d96-7b3da8843fa4',
      clientName: 'Stanford',
      cpf: '111111111111',
      birthDate:
        'Sun Dec 14 1986 01:52:35 GMT-0200 (Horário de Verão de Brasília)',
      monthlyIncome: 3736.79,
      registrationDate:
        'Fri Feb 09 2024 22:28:20 GMT-0300 (Horário Padrão de Brasília)',
      email: 'Kenyatta72@hotmail.com',
    },
    {
      id: '0126ea92-52ad-4d23-b426-77951c2fac66',
      clientName: 'Chelsea',
      cpf: '111111111111',
      birthDate:
        'Sun Jan 04 1970 22:18:25 GMT-0300 (Horário Padrão de Brasília)',
      monthlyIncome: 7758.97,
      registrationDate:
        'Mon Apr 08 2024 10:51:57 GMT-0300 (Horário Padrão de Brasília)',
      email: 'Leland.Fadel@gmail.com',
    },
    {
      id: '5f6bd316-3d27-43e4-8fd7-83b298e53d09',
      clientName: 'Marlon',
      cpf: '111111111111',
      birthDate:
        'Fri Nov 08 1985 09:25:19 GMT-0200 (Horário de Verão de Brasília)',
      monthlyIncome: 5225.06,
      registrationDate:
        'Mon Jun 03 2024 20:13:45 GMT-0300 (Horário Padrão de Brasília)',
      email: 'Cortez20@yahoo.com',
    },
    {
      id: 'edd11114-9fb3-4083-bf31-62cde91eb717',
      clientName: 'Lane',
      cpf: '111111111111',
      birthDate:
        'Sat Sep 23 2000 01:34:48 GMT-0300 (Horário Padrão de Brasília)',
      monthlyIncome: 7889.85,
      registrationDate:
        'Sat Mar 30 2024 09:15:24 GMT-0300 (Horário Padrão de Brasília)',
      email: 'Erika_Dickinson@gmail.com',
    },
    {
      id: 'c9b034e2-d491-4428-9561-28ccc89af488',
      clientName: 'Francis',
      cpf: '111111111111',
      birthDate:
        'Sat Mar 12 1955 22:31:10 GMT-0300 (Horário Padrão de Brasília)',
      monthlyIncome: 478.58,
      registrationDate:
        'Thu Nov 16 2023 05:13:47 GMT-0300 (Horário Padrão de Brasília)',
      email: 'Kaya27@gmail.com',
    },
    {
      id: '01db99d4-9884-4896-b48c-82e12dc6c6ca',
      clientName: 'Simone',
      cpf: '111111111111',
      birthDate:
        'Sun Jul 24 1955 05:54:53 GMT-0300 (Horário Padrão de Brasília)',
      monthlyIncome: 7748.5,
      registrationDate:
        'Sat May 17 2025 13:47:50 GMT-0300 (Horário Padrão de Brasília)',
      email: 'Giles.Maggio@hotmail.com',
    },
    {
      id: '5b53fb2d-d3a5-41ee-9ff5-a04ebe2dc504',
      clientName: 'Cara',
      cpf: '111111111111',
      birthDate:
        'Sun Jan 31 1982 03:14:44 GMT-0300 (Horário Padrão de Brasília)',
      monthlyIncome: 1192.21,
      registrationDate:
        'Wed Oct 16 2024 02:39:03 GMT-0300 (Horário Padrão de Brasília)',
      email: 'Marian_Mayert@yahoo.com',
    },
    {
      id: '6e91a799-7d47-4819-8958-74682e5b451c',
      clientName: 'Shania',
      cpf: '111111111111',
      birthDate:
        'Wed Jun 15 1983 07:48:58 GMT-0300 (Horário Padrão de Brasília)',
      monthlyIncome: 156.04,
      registrationDate:
        'Sun Jul 09 2023 04:42:47 GMT-0300 (Horário Padrão de Brasília)',
      email: 'Tommie.Von@yahoo.com',
    },
    {
      id: 'e6b7da96-57b5-4b2c-9215-c17d1c364e92',
      clientName: 'Oma',
      cpf: '111111111111',
      birthDate:
        'Mon Oct 21 1974 16:22:05 GMT-0300 (Horário Padrão de Brasília)',
      monthlyIncome: 2801.68,
      registrationDate:
        'Sat Dec 30 2023 00:18:58 GMT-0300 (Horário Padrão de Brasília)',
      email: 'Callie51@hotmail.com',
    },
  ];
  @Input() contentTableData!: Customers[];
  dataSource = new MatTableDataSource<Customers>();

  displayedColumns: string[] = [
    'select',
    'clientName',
    'cpf',
    'birthDate',
    'monthlyIncome',
    'registrationDate',
    'email',
  ];
  selection = new SelectionModel<Customers>(true, []);

  ngOnInit(): void {
    console.log(this.contentTableData)
    this.dataSource = new MatTableDataSource<Customers>(this.contentTableData);
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Customers): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }
}
