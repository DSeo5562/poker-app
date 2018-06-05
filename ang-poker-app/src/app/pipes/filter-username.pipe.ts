import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsername'
})
export class FilterUsernamePipe implements PipeTransform {

  constructor() {}

  transform(items: any[], query: string): any {
    if (!items) { return []; }
    if (!query) { return items; }

    query = query.toLowerCase();
    return items.filter(arrValue => {
      return arrValue.toLowerCase().includes(query);
    });
  }
}
