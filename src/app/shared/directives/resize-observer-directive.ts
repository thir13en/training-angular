import { Directive, Inject, Output } from '@angular/core';

import { Observable } from 'rxjs';
import { ResizeObserverService } from '@shared/services';

@Directive({
  selector: '[appResizeObserver]',
  providers: [ResizeObserverService],
})
export class ResizeObserverDirective {
  @Output() readonly waResizeObserver: Observable<ResizeObserverEntry[]>;

  constructor(@Inject(ResizeObserverService) entries$: Observable<ResizeObserverEntry[]>) {
    this.waResizeObserver = entries$;
  }
}
