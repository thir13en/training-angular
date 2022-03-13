import { inject, InjectionToken } from '@angular/core';


// most commonly accessed browser api to use within the context of an Angular Controller
const getWindowRef = (): (Window & typeof globalThis) | null  => window || null;
const getLocalStorage = (): Storage | null => window?.localStorage || null;
const getLocation = (): Location | null => window?.location || null;
const getNavigator = (): Navigator | null => window?.navigator || null;
const getGeolocation = (): Geolocation | null => window?.navigator?.geolocation || null;
const getFileReader = (): FileReader | null => FileReader ? new FileReader() : null;
// @ts-ignore
// TODO: wait for support
const getResizeObserver = (): ResizeObserver | null => ResizeObserver ? new ResizeObserver() : null;

/*****************************************************************************************************
 * INJECTION TOKENS **********************************************************************************
 ****************************************************************************************************/
export const WINDOW = new InjectionToken<Window | null>(
  'Abstraction over the window object',
  {
    providedIn: 'root',
    factory: getWindowRef,
  }
);

export const LOCAL_STORAGE = new InjectionToken<Storage | null>(
  'Abstraction over the window.localStorage object',
  {
    providedIn: 'root',
    factory: getLocalStorage,
  }
);

export const LOCATION = new InjectionToken<Location | null>(
  'Abstraction over the window.location object',
  {
    providedIn: 'root',
    factory: getLocation,
  }
);

export const NAVIGATOR = new InjectionToken<Navigator | null>(
  'Abstraction over the window.navigator object',
  {
    providedIn: 'root',
    factory: getNavigator,
  }
);

export const FILE_READER = new InjectionToken<FileReader | null>(
  'Abstraction over the a fileReader navigator class',
  {
    providedIn: 'root',
    factory: getFileReader,
  }
);

export const GEOLOCATION = new InjectionToken<Geolocation | null>(
  'An abstraction over window.navigator.geolocation object',
  {
    providedIn: 'root',
    factory: getGeolocation,
  },
);

export const POSITION_OPTIONS = new InjectionToken<PositionOptions>(
  'Token for an additional position options',
  { factory: () => ({}) },
);

// @ts-ignore
export const RESIZE_OBSERVER = new InjectionToken<ResizeObserver | null>(
  'An abstraction over ResizeObserver navigator',
  {
    providedIn: 'root',
    factory: getResizeObserver,
  },
);

/*****************************************************************************************************
 * SUPPORT *******************************************************************************************
 ****************************************************************************************************/
export const GEOLOCATION_SUPPORT = new InjectionToken<boolean>(
  'Is Geolocation API supported?',
  {
    factory: () => !!inject(GEOLOCATION),
  },
);

export const RESIZE_OBSERVER_SUPPORT = new InjectionToken<boolean>(
  'Is ResizeObserver API supported?',
  {
    factory: () => !!inject(RESIZE_OBSERVER),
  },
);
