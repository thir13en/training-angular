import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { AppState } from '@shared/models/app-state.interface';


const INITIAL_STATE: AppState = {};

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  private state$: BehaviorSubject<any> = new BehaviorSubject<any>(INITIAL_STATE);

  constructor() {}

}
