import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply',
  standalone: true
})
export class MultiplyPipe implements PipeTransform {
  transform(value: any, args: number): any {
    if (isNaN(value)) {
      return 'Value is not a number';
    }

    return value * args;
  }
}
