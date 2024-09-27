import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(value: string[], args: string) {
    if (value.length === 0) {
      return value;
    }

    let resultArray = [];

    for (let item of value) {
      if (item.toLowerCase().match('^.*' + args.toLowerCase() + '.*$')) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }
}
