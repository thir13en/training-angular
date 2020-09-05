import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { UIState } from '../shared/models';


@Injectable({
  providedIn: 'root',
})
export class UIStateService {

  private current$: BehaviorSubject<UIState> = new BehaviorSubject<UIState>({
    sidenavOpened: true,
  });

  get sidenavOpened$(): Observable<boolean> {
    return this.current$
      .asObservable()
      .pipe(
        map((currentState): boolean => currentState.sidenavOpened),
      );
  }

  toggleSidenav(): void {
    this.sidenavOpened$.pipe(
      take(1),
      map(sidenavOpened => !sidenavOpened),
      tap(sidenavOpened => {
        const newState: UIState = {
          ...this.current$.getValue(),
          sidenavOpened,
        };

        this.current$.next(newState);
      }),
    ).subscribe();
  }

}
