import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter_data: string): any[] {
    if (!items) return [];
    if (!filter_data) return items;

    return items.filter(item => {
      return Object.keys(item).some(key => {
        return String(item[key]).toLowerCase().includes(filter_data.toLowerCase());
      });
    });
  }
}
