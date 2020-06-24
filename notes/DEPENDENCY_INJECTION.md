# Dependency Injection

Every injectable item in Angular has a unique identifier to the Dep Injection
mechanism known as `Injection Token`.  
Angular DI system works with Class names as `Injection Tokens`. Under the hood,
Angular uses the `useClass` property of the providers object to create an instance of 
the class.  
It is interesting to note that the two following syntax are equivalent.
```angular2
providers: [ClassName],
```
```angular2
providers: [{ provide: ClassName, useClass: ClassName}],
```

### Hierarchical Injection
1. Look for the service in the providers array of the component
2. Look for the service in the providers array of the parent component
3. Repeat for all parents, if not number 4.
4. Look for the service in the providers array of the module.
5. Look for the service as an app singleton.  

The main advantage of setting the provider at the level of the component, is that
it gets attached to the lifecycle of the component, so when the component is destroyed,
so is the service and the memory space it is taking.

### Tree Shakeable providers
Are services that can be tree shaken in case they are not used.
```angular2
@Injectable({
    providedIn: 'root',
    useFactory: (http: HttpClient) => new CoursesService(http),
    deps: [HttpClient],
})
ServiceName {

}
```
Which can be expressed as
```angular2
@Injectable({
    providedIn: 'root',
    useClass: ServiceName,
})
ServiceName {

}
```
Which can be expressed as
```angular2
@Injectable({
    providedIn: 'root'
})
ServiceName {

}
```
So now if our service isn't injected in any part of the app, it won't
be loaded in the production bundle (`tree shaking`).

We should always use the `tree shakeable syntax` (`providedIn`) when possible.

### Providing app wide configuration
Check the `config.ts` file of this repo.

### @Optional decorator
When added to an injected dependency in the constructor, avoids that
the app crashes then the injectable is not provider at the root level or in the
module providers array or in the component providers array.
```angular2
@Optional()
private injectable: InjectableClassName
```

### @Self decorator
Even thou there is a module level instance of a service, the @self decorator makes
sure that we get a different instance of the service on the injected component.
```angular2
@Self()
private injectable: InjectableClassName
```

### @SkipSelf decorator
The local provider is ignored and we fetch the instance from the parent or module component.
```angular2
@SkipSelf()
private injectable: InjectableClassName
```
