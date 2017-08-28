import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyCurrency'
})
export class PrettyCurrencyPipe implements PipeTransform {

  transform(price: number, currency?: string): string {
    return price + ' ' + currency;
  }
}
