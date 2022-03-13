import { createAction, props } from '@ngrx/store';
import { LayoutEntity } from './layout.models';

export const init = createAction('[Layout Page] Init');

export const loadLayoutSuccess = createAction(
  '[Layout/API] Load Layout Success',
  props<{ layout: LayoutEntity[] }>()
);

export const loadLayoutFailure = createAction(
  '[Layout/API] Load Layout Failure',
  props<{ error: any }>()
);
