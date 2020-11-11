import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DatePipe, FilterExamplePipe } from '@shared/pipes';
import { ResizeObserverDirective } from '@shared/directives/resize-observer-directive.directive';


@NgModule({
  imports: [
    FormsModule,
  ],
  declarations: [
    DatePipe,
    FilterExamplePipe,
    ResizeObserverDirective,
  ],
  exports: [
    DatePipe,
    FilterExamplePipe,
    ResizeObserverDirective,
  ],
})
export class SharedModule {}
