import { TestBed } from '@angular/core/testing';

import { ResizeObserverService } from '../services';
import { ResizeObserverDirective } from './resize-observer-directive';

describe('ResizeObserverDirectiveDirective', () => {
  let directive: ResizeObserverDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResizeObserverDirective],
      providers: [ResizeObserverService],
    });
  });

  beforeEach(() => {
    directive = TestBed.inject(ResizeObserverDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
