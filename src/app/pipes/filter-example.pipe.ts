import { Pipe, PipeTransform } from '@angular/core';


// will filter by category in the following way:
// arrayWithCategory | filterExample: 'CATEGORY_TO_FILTER'
@Pipe({
  name: 'filterExample'
})
export class FilterExamplePipe implements PipeTransform {

  transform(element: any[], category: string): unknown {
    return element.filter(el => el.category === category);
  }

}
