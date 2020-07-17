# Angular Forms

In Angular, forms make use of the `FormsModule` and the `ReactiveFormsModule`, imported from `@angular/forms`.

### Template Driven Forms
We can achieve `Two Way Data Binding` in an Angular Template Driven Form, by assigning to the controller the banana box
binding:
```angular2html
ìnput name="inputName" [(ngModel)]="bindedProp"
```
`<form>` in template driven forms gets implicitly assigned an `ngForm` directive. If you look closely, you realize that a 
TDF in Angular is managed by a set of implicit or explicit plain Angular directives contained in the `FormsModule`.

### How to export form directive?
By assigning a template variable to it.
```angular2html
<form #f="ngForm">
    ...
</form>
```
Now we can access the `template driven form` by accessing the `f` template variable.

### Form state classes
We have three managed states reflected in form input classes:
```text
.ng-pristine -> .ng-dirty
.ng-untouched -> .ng-touched
.ng-invalid -> .ng-valid
```
