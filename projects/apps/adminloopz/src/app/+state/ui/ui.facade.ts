import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as UIActions from './ui.actions';
import * as UISelectors from './ui.selectors';

@Injectable()
export class UIFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  sidenavOpen$ = this.store.pipe(select(UISelectors.getSidenavOpen));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  toggleSidenav() {
    this.store.dispatch(UIActions.toggleSidenav());
  }
}
