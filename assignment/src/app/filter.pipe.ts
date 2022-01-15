import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[] | null, filterProperty: string) {
    if( filterProperty && items && Array.isArray(items)) return items.sort((item1, item2) => item1[filterProperty] - item2[filterProperty]);
    return items;
  }

}