import { ElementRef, Inject, Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, share } from 'rxjs/operators';

import { RESIZE_OBSERVER_SUPPORT } from '@core/browser-api';


@Injectable()
export class ResizeObserverService extends Observable<ReadonlyArray<ResizeObserverEntry>> {

  constructor(
    @Inject(ElementRef) { nativeElement }: ElementRef<Element>,
    @Inject(NgZone) ngZone: NgZone,
    @Inject(RESIZE_OBSERVER_SUPPORT) support: boolean,
    // @Inject(RESIZE_OPTION_BOX) box: ResizeObserverOptions['box'],
  ) {
    // TODO: temp fix
    const box = undefined;
    let observer: ResizeObserver;

    super(subscriber => {
      if (!support) {
        subscriber.error('ResizeObserver is not supported in your browser');
      }

      observer = new ResizeObserver(entries => {
        ngZone.run(() => {
          subscriber.next(entries);
        });
      });
      observer.observe(nativeElement, { box });
    });

    return this.pipe(
      finalize(() => observer.disconnect()),
      share(),
    );
  }
}
