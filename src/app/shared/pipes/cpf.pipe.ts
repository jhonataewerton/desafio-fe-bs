import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf',
})
export class CpfPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    const cleaned = value.replace(/\D+/g, '');

    if (cleaned.length !== 11) {
      return value;
    }

    const formatted = cleaned.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      '$1.$2.$3-$4'
    );
    return formatted;
  }
}
