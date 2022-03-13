import { Injectable } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ReplayControlValueChanges<T> extends Observable<T> {
  constructor(control: AbstractControl) {
    super(subscriber => {
      if (!control.valueChanges) {
        throw new Error('Control does not have valueChanges');
      }

      control.valueChanges.pipe(
        startWith(control.value),
      ).subscribe(subscriber);
    });
  }
}
