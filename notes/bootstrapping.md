# Bootstrapping

### Dynamic Bootstrapping
In development mode, we use JIT compilation shipping the Angular compiler to the browser:
```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({...})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
```
This will come at the expense of a much larger application bundle, but that is OK when the server 
is actually running on your own development machine. 

### Loading data on app initialization
You can do so with the `APP_INITIALIZER`, where you can provide a series of functions
whose value will be evaluated before app initialization, it some value returns a promise or
an observable, the app initialization will be halted until these values resolve.
