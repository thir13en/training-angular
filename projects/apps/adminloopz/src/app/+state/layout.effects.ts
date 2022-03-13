import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as LayoutActions from './layout.actions';
import * as LayoutFeature from './layout.reducer';

@Injectable()
export class LayoutEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LayoutActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return LayoutActions.loadLayoutSuccess({ layout: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return LayoutActions.loadLayoutFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
