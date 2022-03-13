import { TestBed } from '@angular/core/testing';

import { TestingModule } from '@testing/testing.module';
import { ExampleService } from './example.service';


describe('ExampleService', () => {
  let service: ExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
    });
    service = TestBed.inject(ExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
