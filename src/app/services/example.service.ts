import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private http: HttpClient) { }

  getWhatever() {
    const params = new HttpParams()
      .set('page', '1')
      .set('pageSize', '10');

    return this.http.get('/whatever/', { params });
  }
}
