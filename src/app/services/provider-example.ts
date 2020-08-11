// A custom provider for example service to practice dependency injection in Angular
import { InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExampleService } from './example.service';


export function exampleServiceProvider(http: HttpClient) {
  return new ExampleService(http);
}

// the unique identifier of the dependency
export const EXAMPLE_SERVICE = new InjectionToken<ExampleService>('EXAMPLE_SERVICE');
