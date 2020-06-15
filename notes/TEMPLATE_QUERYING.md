# Template Querying

### You can query template elements of a component with the `ViewChild` decorator
```typescript
@ViewChild(ComponentClassName) propName: ComponentType;
or
@ViewChild(templateref) propName: ElementRef<HTMLElement>;
```
Also, if you want to query targeting the html element tag that represents
the Angular component, you can specify via a config object.
```typescript
@ViewChild(ComponentClassName, { read: ElementRef }) propName: ElementRef;
```
The scope of the template querying restricts us to the component template itself,
and cannot be used to target elements inside the components of it.
