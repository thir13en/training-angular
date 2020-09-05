import { InjectionToken } from '@angular/core';


export const ROUTE_FRAGMENTS = {
  ROOT: '',
  TEMPLATE_DRIVEN_FORMS: 'template-driven-forms',
  PARAM: '%s',
};
export const ROUTES_LIST = {
  TEMPLATE_DRIVEN_FORMS: [ROUTE_FRAGMENTS.ROOT, ROUTE_FRAGMENTS.TEMPLATE_DRIVEN_FORMS].join('/'),
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
