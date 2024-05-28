import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { DialogComponent } from '../dialog/dialog.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent, DialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set textContent input correctly', () => {
    const testText = 'Test Button';
    component.textContent = testText;
    fixture.detectChanges();
    const buttonElement: HTMLElement =
      fixture.nativeElement.querySelector('button');
    expect(buttonElement.textContent).toEqual(testText);
  });

  it('should set class input correctly', () => {
    const testClass = 'custom-class';
    component.class = testClass;
    fixture.detectChanges();
    const buttonElement: HTMLElement =
      fixture.nativeElement.querySelector('button');
    expect(buttonElement.classList.contains(testClass)).toBeTrue();
  });

  it('should set disabled input correctly', () => {
    component.disabled = true;
    fixture.detectChanges();
    const buttonElement: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(buttonElement.disabled).toBeTrue();

    component.disabled = false;
    fixture.detectChanges();
    expect(buttonElement.disabled).toBeFalse();
  });
});
