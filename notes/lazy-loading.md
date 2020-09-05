# Lazy Loading

### Lazy Loading and Dependency Injection
Whenever we lazy load a module `Angular` will create a `dependency injection sub-context`,
which is a child context of the `root dependency injection module`. This means that
in a `lazy loaded module with providers`, the services of those `providers` are only visible
to the lazy loaded module itself. In opposition, a simple `feature module` (not lazy loaded),
will receive the providers via the global dependency injection pool.  
Why does this happen? When we lazy load a module we want to make sure that non of the services that
it uses override the ones in the global application, for example in case the name is the same.
To solve this, we can return a root `moduleWithProviders` object in a shared module.
```typescript
@NgModule({
    ...
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [WhateverProviders]
        }
    }
}
``` 
In the `AppModule`
```typescript
@NgModule({
    import: [
        SharedModule.forRoot(),
    ]
})
export class AppModule {}
```
This needs further experimentation on my side to check, probably this behaviour changed in the last
version of `Angular`.
