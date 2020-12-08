import { tap } from 'rxjs/operators';

import { environment } from '@environments/environment';


const debuggerOn = !environment.production;

export const debug = (message: string) => {
  return tap(
    (next) => {
      if (debuggerOn) {
        console.log(message, next);
      }
    },
    (err) => {
      if (debuggerOn) {
        console.error('ERROR >>> ', message , err);
      }
    },
    () => {
      if (debuggerOn) {
        console.log('Completed.');
      }
    }
  );
};
