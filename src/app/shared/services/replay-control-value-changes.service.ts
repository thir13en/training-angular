import { Injectable } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

import { Observable, scheduled as observableScheduled } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReplayControlValueChanges<T> extends Observable<T> {
  constructor(control: AbstractControl | AbstractControlDirective) {
    super(subscriber => {
      if (!control.valueChanges) {
        throw new Error('Control does not have valueChanges');
      }

      // TODO: solve this
      control.valueChanges.pipe(
        observableScheduled(control.value)
      ).subscribe(subscriber);
    });
  }
}
