import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as LayoutActions from './layout.actions';
import { LayoutEffects } from './layout.effects';

describe('LayoutEffects', () => {
  let actions: Observable<Action>;
  let effects: LayoutEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        LayoutEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(LayoutEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: LayoutActions.init() });

      const expected = hot('-a-|', {
        a: LayoutActions.loadLayoutSuccess({ layout: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
