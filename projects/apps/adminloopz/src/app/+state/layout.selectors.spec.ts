import { LayoutEntity } from './layout.models';
import {
  layoutAdapter,
  LayoutPartialState,
  initialState,
} from './layout.reducer';
import * as LayoutSelectors from './layout.selectors';

describe('Layout Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getLayoutId = (it: LayoutEntity) => it.id;
  const createLayoutEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as LayoutEntity);

  let state: LayoutPartialState;

  beforeEach(() => {
    state = {
      layout: layoutAdapter.setAll(
        [
          createLayoutEntity('PRODUCT-AAA'),
          createLayoutEntity('PRODUCT-BBB'),
          createLayoutEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Layout Selectors', () => {
    it('getAllLayout() should return the list of Layout', () => {
      const results = LayoutSelectors.getAllLayout(state);
      const selId = getLayoutId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = LayoutSelectors.getSelected(state) as LayoutEntity;
      const selId = getLayoutId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getLayoutLoaded() should return the current "loaded" status', () => {
      const result = LayoutSelectors.getLayoutLoaded(state);

      expect(result).toBe(true);
    });

    it('getLayoutError() should return the current "error" state', () => {
      const result = LayoutSelectors.getLayoutError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
