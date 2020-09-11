# Directives

### The most common type of directive in Angular are `Components`
Components are directives with a template.

### Types of directives in Angular
The three types of directives are `Attribute`, `Structural` and `Components`.

### Structural directives
Produce changes in the DOM tree. They create under the hood a ng-template with a conditional
rendering logic. For instance `*ngIf="something as whatever"` is translated to:
```angular2html
<ng-template [ngIf]="something" let-whatever></ng-template>
``` 
