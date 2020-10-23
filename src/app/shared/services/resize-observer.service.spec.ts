import { TestBed } from '@angular/core/testing';

import { ResizeObserverService } from './resize-observer.service';

describe('ResizeObserverService', () => {
  let service: ResizeObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResizeObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
