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
 
### Tree Shakeable providers

