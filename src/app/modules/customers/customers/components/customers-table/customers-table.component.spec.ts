import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersTableComponent } from './customers-table.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CustomersTableComponent', () => {
  let component: CustomersTableComponent;
  let fixture: ComponentFixture<CustomersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatPaginatorModule, MatButtonModule, MatTableModule, SharedModule, BrowserAnimationsModule],
      declarations: [ CustomersTableComponent, ButtonComponent, DialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
