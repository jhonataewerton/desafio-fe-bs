import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ButtonComponent } from '../button/button.component';

describe('ConfirmationDialogComponent', () => {
  let component: ConfirmationDialogComponent;
  let fixture: ComponentFixture<ConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, ],
      declarations: [ ConfirmationDialogComponent, ButtonComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} } // Fornecendo uma instância vazia de MAT_DIALOG_DATA
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set text and isError properties correctly', () => {
    const testData = {
      text: 'Test message',
      isError: true
    };

    component.data = testData;
    component.ngOnInit();

    expect(component.text).toEqual(testData.text);
    expect(component.isError).toEqual(testData.isError);
  });

});
