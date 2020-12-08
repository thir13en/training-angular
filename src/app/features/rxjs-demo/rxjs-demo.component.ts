import { Component, OnInit } from '@angular/core';

import { interval, timer } from 'rxjs';
import { debug } from '@shared/utils';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.scss']
})
export class RxjsDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(2000).pipe(
      debug('something'),
    ).subscribe();
  }

}
