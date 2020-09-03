import { async, TestBed } from '@angular/core/testing';

import { TestingModule } from '@testing/testing.module';
import { SocketService } from './socket.service';


describe('SocketService', () => {
  let service: SocketService;

  beforeEach(async(() => {
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
