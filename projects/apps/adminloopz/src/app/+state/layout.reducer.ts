import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as LayoutActions from './layout.actions';
import { LayoutEntity } from './layout.models';

export const LAYOUT_FEATURE_KEY = 'layout';

export interface State extends EntityState<LayoutEntity> {
  selectedId?: string | number; // which Layout record has been selected
  loaded: boolean; // has the Layout list been loaded
  error?: string | null; // last known error (if any)
}

export interface LayoutPartialState {
  readonly [LAYOUT_FEATURE_KEY]: State;
}

export const layoutAdapter: EntityAdapter<LayoutEntity> =
  createEntityAdapter<LayoutEntity>();

export const initialState: State = layoutAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const layoutReducer = createReducer(
  initialState,
  on(LayoutActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(LayoutActions.loadLayoutSuccess, (state, { layout }) =>
    layoutAdapter.setAll(layout, { ...state, loaded: true })
  ),
  on(LayoutActions.loadLayoutFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return layoutReducer(state, action);
}
