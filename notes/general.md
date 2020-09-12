# General


### Principles of Angular
* Component Driven Design
* Abstraction over DOM Manipulation
* Built on top of:
    * Webpack
    * Zone.js 
    * TypeScript
    * RxJs

### What are the two main features of the Angular Core?
The tooling for creating custom Angular Html Elements and the 
possibility of completely separating the presentation layer, and the business
logic layer by keeping them in two separates `.ts` and `.html` files.

### Presentation Components vs Smart Components

### Structural Directives
Such as `*ngFor`, allows us to change the DOM of our page based on the
mapping of certain data into it.

* `*ngFor` syntax:  
```angular2html
*ngFor="
    let item of items;
    let index as i;
    let first as isFirst;
    let last as isLast;
    let even as isEven;
    let odd as isOdd;
"
```

* `*ngIf` syntax:
The directive is responsive to turn the expression into a boolean.  
```angular2html
*ngIf="expression"
```

* `ngClass` syntax:  
You can pass a string, the class will be applied immediately.
```angular2html
<component-name ngClass="class1 class2"></component-name>
```
Also an array of strings with the classes to append.
```angular2html
<component-name [ngClass]="['class1', 'class2']"></component-name>
```
A configuration object with class-key / boolean pairs.
```angular2html
<component-name [ngClass]="{ class1: applyBoolean, class2: true }"></component-name>
```
* `ngClass` syntax:
```angular2html
<component-name [ngStyle]="{ textDecoration: 'underline' }"></component-name>
```  

* `ngSwitch` syntax:  
```angular2html
<div [ngSwitch]="'expression'">
    <div *ngSwitchCase="'val1'">
        <h5>Whatever</h5>
    </div>
    <div *ngSwitchCase="'val2'">
        <h5>Whatever</h5>
    </div>
    <div *ngSwitchDefault>
        <h5>No match</h5>
    </div>
</div>
```  

### ViewEncapsulation
Is what makes components styles only accessible from within the component
template. It is achieved by adding a custom property to the component 
template elements, which acts as a scope identifier, so as to simulate a shadow dom. 

### Angular build process
The `ng` command reads your `angular.json` file to find which Builder should be used. The Builder layer is internally called `Architect`,
so look in your `angular.json` for a key `architect`, and you'll see mappings for what builder to use. For example, say you run `ng build`;
the default builder is `@angular-devkit/build-angular:browser`.
