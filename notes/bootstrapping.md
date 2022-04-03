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

### The Angular Compiler
Check out [This interesting read.](https://blog.angular.io/how-the-angular-compiler-works-42111f9d2549).
The Angular Compiler `ngc` reads the contents of the class Decorators found in our app and interprets them in two steps:
1. Partial Evaluation: Able to tracing all variable names and legal expressions contained in the template and trace them back to their actual value.
2. Output of Analysis
3. Global Analysis
The partial evaluator can understand simple constants; object and array literals; property accesses; imports/exports; arithmetic and other binary operations; and even evaluate calls to simple functions.  
At the end of the analysis phase, the compiler already has a good picture of what components, directives, pipes, injectables, and NgModules are in the input program. For each of these, the compiler constructs a **metadata** object describing everything it learned from the class’ decorators. By this point, components have had their templates and stylesheets loaded from disk (if necessary), and the compiler may already have produced errors (known in TypeScript as “diagnostics”) if semantic errors are detected in any part of the input so far.
