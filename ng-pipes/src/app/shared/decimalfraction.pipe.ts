import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalfraction'
})
export class DecimalfractionPipe implements PipeTransform {

  transform(value: number, numberofDigits: number = 1): string {
    //pipe logic :Decimal round of pipe
    return value.toFixed(numberofDigits)
  }

}
