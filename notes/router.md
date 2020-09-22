# Router


### routerLink
The basic directive for navigation, can accept a string or an expression consisting of 
an array of route fragments. We can also assign query params, as shown in the example.
```angular2html
<a routerLink="home">Home</a>
<a [routerLink]="['home']" [queryParams]="{ key: 'value', }">Home</a>
```

### Set up a specific entry route for the app
You can do so in the `index.html` file using the following tag:
```angular2html
<base href="/src/my-path/">
```

### Set up fallback routes
You do so with the `wildcard` route, in this way:
```typescript
const routes: Routes = [
    { path: '**', component: ComponentName }
];
```

### How do you style a component or element when a given route is active
We use the `routerLinkActive` directive.
```angular2html
<a routerLinkActive="class-name" [routerLinkActiveOptions]="{ exact: true }"></a>
```
The `routerLinkActiveOptions` can be set to only apply the class when the path gets and
strict matching.

### Use string interpolation with `navigateByUrl`
```typescript
navigate(id): void {
    this.router.navigateByUrl(`/fragment/${id}`);
}
```

### Navigate relative to current route
```typescript
navigate(id): void {
    this.router.navigate(['fragment'], { relativeTo: this.route });
}
```

### Check route observers to avoid memory leaks
```typescript
// the number of current ongoing subscriptions
this.route.(params | queryParams).observers.length
```

### Pass query parameters
```typescript
navigate(id): void {
    this.router.navigate(['fragment'], { queryParams: { key: 'value', } });
}
```

### Get fragment and query params
We have available the `paramMap` and the `queryParamMap` observable in our `ActivatedRoute`.

### canDeactivate
`Guard` that is associated to a certain route and triggers an action when the user tries to leave.
 In routes module:
```typescript
const routes = [
    {
        path: 'jupiter',
        component: NoopComponent,
        canDeactivate: NoopComponentDeactivate,
    }
];
// in NoopComponent
@Component({
    ...
    providers: [NoopComponentDeactivate],
})
NoopComponent {}

import {ActivatedRouteSnapshot, CanDeactivate, canDeactivate,RouterStateSnapshot } from '@angular/router';

export class NoopComponentDeactivate implements CanDeactivate<NoopComponent> {
    canDeactivate(
        component: NoopComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        if (!component.evaluationFlag) {
            return true;
        }
        return confirm('Please don\'t go');
    }
}
```

### canActivate
 ```typescript
const routes = [
    {
        path: 'jupiter',
        component: NoopComponent,
        canActivate: NoopComponentActivate,
    }
];
// in NoopComponent
@NgModule({
    ...
    providers: [NoopComponentActivate],
})
NoopModule {}

import { ActivatedRouteSnapshot, CanDeactivate, canDeactivate,RouterStateSnapshot } from '@angular/router';

export class NoopComponentDeactivate implements CanActivate {
    canDeactivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        let canActivate = true;
        // your business logic that returns bool or obs<bool>
        return canActivate;
    }
}
```

### Auxiliary routes
Allow for a certain section of the page to act as kind of a browser window, which changes
content depending on the route.
```typescript
const routes: Routes = [
    { path: 'whatever', component: MarsComponent },
    { path: 'auxiliary', component: VenusComponent, outlet: 'outlet-identifier' },
];
```
```angular2html
<div id="auxiliary">
    <!-- the auxiliary route must have a name and it's own separate router -->
    <router-outlet name="outlet-identifier"></router-outlet>
</div>
```
Now, in the url, you need this special and weird syntax
```
https://url.ext/whatever(outlet-identifier:/auxiliary)
```

### Pass parameters to `auxiliary routes`
Follow this example:
```typescript
const paramValue = 'Netptune';
this.router.navigateByUrl(`/primary(auxiliary:route;paramName=${paramValue})`);
```
To retrieve the parameter:
```typescript
export class Component {
    private parameter: string;
    constructor(private route: ActivatedRoute) {
        // same as a standard url parameter
        this.route.paramMap.subscribe(paramMap => this.parameter = paramMap.get('paramName'));
        
    }
}
```

### Common pitfalls
* Remember to use `pathMatch: \"full\"` for a strict url matching.
* Routes get parsed top bottom, so first routes have + priority.

### Router Hash Location Strategy vs HTML5 Location Strategy
Prepends a hash to the app routes, good for old legacy browsers that do not support the `html5 history` feature.
```typescript
@NgModule({
    ...
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppModule {}
```

### Router navigation events
Keep track of the lifecycle of a route. These are:
```
* NavigationStart,
* RouteConfigLoadStart,
* RouteConfigLoadEnd,
* RoutesRecognized,
* GuardsCheckStart,
* ChildActivationStart,
* ActivationStart,
* GuardsCheckEnd,
* ResolveStart,
* ResolveEnd,
* ActivationEnd
* ChildActivationEnd
* NavigationEnd,
* NavigationCancel,
* NavigationError
* Scroll
```

