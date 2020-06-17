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
```typescript
@ViewChildren(ComponentClassName) propName: ComponentType;
// or
@ViewChildren(templateref) propName: ElementRef<HTMLElement>;

// get first element
childrenPropname.first
// get last element
childrenPropname.last
// itarable
childrenPropname.each
// get observable of changes
childrenPropName.changes
```
Also accepts a configuration object with the `read` property.

### Targeting Projected Content in a Component
```angular2
@ContentChild('targetElement') name: ElementRef
// or
@ContentChild(ComponentClassName) name: ComponentClassName
// can also pass config object
@ContentChild(ComponentClassName, {read: ElementRef}) name: ElementRef
```
Targets exclusively content projected in the `ng-content` of the Component.  
In similar way to `ContentChild`, we have `ContentChildren` that selects
more than one element.
```angular2
@ContentChildren(ComponentClassName) els: QueryList<ComponentClassName>;
```
It is different to the `ContentChild` in the sense that it targets the elements that
are projectable inside the component tags and not the projected content inside the 
`<ng-content></ng-content>` tags of the component.
