import { Pipe, PipeTransform } from '@angular/core';


// will filter by category in the following way:
// arrayWithCategory | filterExample: 'CATEGORY_TO_FILTER'
@Pipe({
  name: 'filterExample',
  // when input data of the pipe is mutated, it wont be triggered by default
  // to make it reactive to input data mutations, you should make it unpure,
  // which will make the pipe trigger with every change detection cycle.
  pure: false,
  // with this pipe will run with every life cycle
})
export class FilterExamplePipe implements PipeTransform {

  transform(element: any[], category: string): unknown {
    return element.filter(el => el.category === category);
  }

}
