import { async, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { EMPTY } from 'rxjs';

import { TestingModule } from '@testing/testing.module';
import { ApiService } from '@shared/services/api.service';


describe('ApiService', () => {
  let service: ApiService;
  let http: HttpClient;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      providers: [ApiService],
    });
  }));

  beforeEach((): void => {
    service = TestBed.inject<ApiService>(ApiService);
    http = TestBed.inject<HttpClient>(HttpClient);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should build the right url from path', () => {
    const spy = spyOn(http, 'get').and.returnValues(EMPTY);
    const path = 'endpoint';

    service.get({ path });

    expect(spy).toHaveBeenCalledWith(path);
  });

  it('should correctly add path param to path', () => {
    const spy = spyOn(http, 'get').and.returnValues(EMPTY);
    const path = 'endpoint/%s';
    const pathParams = ['param'];
    const expected = 'endpoint/param';

    service.get({ path, pathParams });

    expect(spy).toHaveBeenCalledWith(expected);
  });

  it('should correctly add multiple path params to path', () => {
    const spy = spyOn(http, 'get').and.returnValues(EMPTY);
    const path = 'endpoint/%s/diodeno/%s';
    const pathParams = ['param', 'jarl'];
    const expected = 'endpoint/param/diodeno/jarl';

    service.get({ path, pathParams });

    expect(spy).toHaveBeenCalledWith(expected);
  });

});
