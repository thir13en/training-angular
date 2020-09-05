import { TestBed, waitForAsync } from '@angular/core/testing';

import { TestingModule } from '@testing/testing.module';
import { SocketService } from './socket.service';


describe('SocketService', () => {
  let service: SocketService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
    });
  }));

  beforeEach(() => {
    service = TestBed.inject(SocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
