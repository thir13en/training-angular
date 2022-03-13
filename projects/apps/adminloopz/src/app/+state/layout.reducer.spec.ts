import { Action } from '@ngrx/store';

import * as LayoutActions from './layout.actions';
import { LayoutEntity } from './layout.models';
import { State, initialState, reducer } from './layout.reducer';

describe('Layout Reducer', () => {
  const createLayoutEntity = (id: string, name = ''): LayoutEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Layout actions', () => {
    it('loadLayoutSuccess should return the list of known Layout', () => {
      const layout = [
        createLayoutEntity('PRODUCT-AAA'),
        createLayoutEntity('PRODUCT-zzz'),
      ];
      const action = LayoutActions.loadLayoutSuccess({ layout });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
