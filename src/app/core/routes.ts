import { InjectionToken } from '@angular/core';

export const ROUTE_FRAGMENTS = {
  ROOT: '/',
  PARAM: '%s',
};
export const ROUTES_LIST = {
};

export const ROUTES_INJECTABLE = new InjectionToken<any>(
  'Routes',
  {
    providedIn: 'root',
    factory: () => ROUTES_LIST
  },
);
export const ROUTES_FRAGMENTS_INJECTABLE = new InjectionToken<any>(
  'RoutesFragments',
  {
    providedIn: 'root',
    factory: () => ROUTE_FRAGMENTS
  }
);

// TODO: configure routes
