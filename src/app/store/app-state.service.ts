import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

// import { AppState } from '@shared/models';


// const INITIAL_STATE: AppState = {
const INITIAL_STATE = {

};

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  private state$: BehaviorSubject<any> = new BehaviorSubject<any>(INITIAL_STATE);

  constructor() {}

}
