import { Directive, Inject, Output } from '@angular/core';

import { ResizeObserverService } from '@shared/services';
import { Attribute } from '@angular/compiler';
import { Observable } from 'rxjs';


// TODO: create this provider
function RESIZE_OPTION_BOX() {}
function boxFactory() {}

@Directive({
  selector: '[appResizeObserver]',
  providers: [
    ResizeObserverService,
    {
      provide: RESIZE_OPTION_BOX,
      // TODO: figure out this
      // deps: [[new Attribute('appResizeBox')]],
      useFactory: boxFactory,
    },
  ],
})
export class ResizeObserverDirective {
  // @ts-ignore
  @Output() readonly waResizeObserver: Observable<ResizeObserverEntry[]>;

  constructor(
    // @ts-ignore
    @Inject(ResizeObserverService) entries$: Observable<ResizeObserverEntry[]>
  ) {
    this.waResizeObserver = entries$;
  }
}
