import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    // Verifica se há pelo menos um espaço no valor, indicando nome e sobrenome
    const parts = value.trim().split(' ');
    return parts.length > 1 ? null : { nameWithSurname: true };
  };
}
