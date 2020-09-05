import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EXAMPLE_SERVICE, exampleServiceProvider } from '../../../../shared/services/provider-example';
import { ExampleService } from '../../../../shared/services/example.service';


@Component({
  selector: 'app-dep-injection-one',
  templateUrl: './dep-injection-one.component.html',
  styleUrls: ['./dep-injection-one.component.scss'],
  providers: [
    {
      provide: EXAMPLE_SERVICE,
      useFactory: exampleServiceProvider,
      // needed to provide the adequate dependencies to the factory function
      deps: [HttpClient],
    }
  ],
})
export class DepInjectionOneComponent implements OnInit {

  constructor(
    // here we tell Angular which injection token will solve our Injectable service
    @Inject(EXAMPLE_SERVICE) private exampleService: ExampleService,
  ) { }

  ngOnInit(): void {
  }

}
