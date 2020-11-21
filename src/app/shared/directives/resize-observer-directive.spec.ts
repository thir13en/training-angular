import { ResizeObserverDirective } from './resize-observer-directive';
import { TestBed } from '@angular/core/testing';
import { ResizeObserverService } from '../services';

describe('ResizeObserverDirectiveDirective', () => {
  it('should create an instance', () => {
    let directive: ResizeObserverDirective;
    let resizeObserverService: ResizeObserverService;

    TestBed.configureTestingModule({
      declarations: [ResizeObserverDirective],
      providers: [ResizeObserverService],
    });

    resizeObserverService = TestBed.inject(ResizeObserverService);
    // TODO: figure this out
    directive = new ResizeObserverDirective(resizeObserverService);
    expect(directive).toBeTruthy();
  });
});
