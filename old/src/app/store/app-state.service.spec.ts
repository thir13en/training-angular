import { TestBed } from '@angular/core/testing';

import { TestingModule } from '@testing/testing.module';
import { AppStateService } from './app-state.service';


describe('AppStateService', () => {
  let service: AppStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
    });
    service = TestBed.inject(AppStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
