import { InjectionToken } from '@angular/core';

export interface AppConfig {
  apiUrl: string;
  courseCacheSize: number;
}

export const APP_CONFIG = {
  apiUrl: 'https://localhost:9000',
  courseCacheSize: 10,
};

// tree shakeable config
export const CONFIG_TOKEN = new InjectionToken<AppConfig>(
  'CONFIG_TOKEN',
  {
    providedIn: 'root',
    factory: () => APP_CONFIG,
  }
);
// now you can use in the constructor @Inject(CONFIG_TOKEN) private config: AppConfig;
