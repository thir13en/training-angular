import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as UIActions from './ui.actions';
import { UIEntity } from './ui.models';

export const UI_FEATURE_KEY = 'ui';

export interface State extends EntityState<UIEntity> {
  sidenavOpen: boolean;
}

export interface uiPartialState {
  readonly [UI_FEATURE_KEY]: State;
}

export const uiAdapter: EntityAdapter<UIEntity> =
  createEntityAdapter<UIEntity>();

export const initialState: State = uiAdapter.getInitialState({
  sidenavOpen: true,
});

const uiReducer = createReducer(
  initialState,
  on(UIActions.toggleSidenav, (state) => {
    console.log(state);
    return { ...state, sidenavOpen: !state.sidenavOpen };
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return uiReducer(state, action);
}
