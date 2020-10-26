import { TestBed } from '@angular/core/testing';

import { ReplayControlValueChangesService } from './replay-control-value-changes.service';

describe('ReplayControlValueChangesService', () => {
  let service: ReplayControlValueChangesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReplayControlValueChangesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
