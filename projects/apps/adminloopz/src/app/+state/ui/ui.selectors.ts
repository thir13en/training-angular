import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UI_FEATURE_KEY, State } from './ui.reducer';

export const getUIState = createFeatureSelector<State>(UI_FEATURE_KEY);

export const getSidenavOpen = createSelector(
  getUIState,
  (state: State) => state?.sidenavOpen
);
