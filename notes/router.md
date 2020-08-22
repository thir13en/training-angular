# Router


### routerLink
The basic directive for navigation, can accept a string or an expression consisting of 
an array of route fragments
```angular2html
<a routerLink="home">Home</a>
<a [routerLink]="['home']">Home</a>
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
    { path: '', component: ComponentName }
];
```

### How do you style a component or element when a given route is active
We use the `routerLinkActive` directive.
```angular2html
<a routerLinkActive="class-name" [routerLinkActiveOptions]="{ exact: true }"></a>
```
The `routerLinkActiveOptions` can be set to only apply the class when the path gets and
strict matching.
