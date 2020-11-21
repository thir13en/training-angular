import { Directive, Inject, Output } from '@angular/core';

import { Observable } from 'rxjs';
import { ResizeObserverService } from '@shared/services';


// TODO: create this provider https://medium.com/its-tinkoff/service-as-observable-29ce7fa9085b
function RESIZE_OPTION_BOX() {}
function boxFactory() {}

@Directive({
  selector: '[appResizeObserver]',
  providers: [
    ResizeObserverService,
    {
      provide: RESIZE_OPTION_BOX,
      deps: [[new Attribute('appResizeBox')]],
      useFactory: boxFactory,
    },
  ],
})
export class ResizeObserverDirective {
  @Output() readonly waResizeObserver: Observable<ResizeObserverEntry[]>;

  constructor(
    @Inject(ResizeObserverService) entries$: Observable<ResizeObserverEntry[]>
  ) {
    this.waResizeObserver = entries$;
  }
}
