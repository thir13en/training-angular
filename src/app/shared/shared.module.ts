import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResizeObserverDirective } from '@shared/directives/resize-observer-directive.directive';


@NgModule({
  imports: [
    FormsModule,
  ],
  declarations: [
    ResizeObserverDirective,
  ],
  exports: [
    ResizeObserverDirective,
  ],
})
export class SharedModule {}
