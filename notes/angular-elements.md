# Angular Elements
Create custom elements using the browser API and Angular


### Get started...
```shell script
ng add @angular/elements --project-name=<project-name>
```
And in the `ngOnInit` of the app component:
```javascript
class AppComponent {
    constructor(
        private injector: Injector,
    ) {}
    
    ngOnInit() {
        const htmlElement = createCustomElement(ComponentName, { injector: this.injector });
        customElements.define('course-title', htmlElement);
    }
}
```
You shall add the `ComponentName` component in the `entryComponents` array.

### Use custom elements in your Angular app
In the module you want to use it you should add
```js
{
    ...,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
}
```
