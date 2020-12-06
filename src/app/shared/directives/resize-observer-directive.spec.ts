import { TestBed } from '@angular/core/testing';

import { ResizeObserverService } from '../services';
import { ResizeObserverDirective } from './resize-observer-directive';
import { TestingModule } from '../../testing/testing.module';

describe('ResizeObserverDirective', () => {
  let directive: ResizeObserverDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
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
