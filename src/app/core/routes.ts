import { InjectionToken } from '@angular/core';

export const ROUTE_FRAGMENTS = {
  ROOT: '/',
  AREAS: 'areas',
  TRACKING: 'tracking',
  NEW: 'new',
};
export const ROUTES_LIST = {
  AREAS: [ROUTE_FRAGMENTS.ROOT, ROUTE_FRAGMENTS.AREAS].join(''),
  AREAS_NEW: [ROUTE_FRAGMENTS.ROOT, ROUTE_FRAGMENTS.AREAS, ROUTE_FRAGMENTS.NEW].join(''),
  TRACKING: [ROUTE_FRAGMENTS.ROOT, ROUTE_FRAGMENTS.TRACKING].join(''),
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
