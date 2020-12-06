import { TestBed } from '@angular/core/testing';

import { TestingModule } from '../../testing/testing.module';
import { ResizeObserverService } from './resize-observer.service';

describe('ResizeObserverService', () => {
  let service: ResizeObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      providers: [ResizeObserverService],
    });
    service = TestBed.inject(ResizeObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
