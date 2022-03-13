import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LAYOUT_FEATURE_KEY, State, layoutAdapter } from './layout.reducer';

// Lookup the 'Layout' feature state managed by NgRx
export const getLayoutState = createFeatureSelector<State>(LAYOUT_FEATURE_KEY);

const { selectAll, selectEntities } = layoutAdapter.getSelectors();

export const getLayoutLoaded = createSelector(
  getLayoutState,
  (state: State) => state.loaded
);

export const getLayoutError = createSelector(
  getLayoutState,
  (state: State) => state.error
);

export const getAllLayout = createSelector(getLayoutState, (state: State) =>
  selectAll(state)
);

export const getLayoutEntities = createSelector(
  getLayoutState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getLayoutState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getLayoutEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
