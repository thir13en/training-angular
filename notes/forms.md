# Angular Forms

In Angular, forms make use of the `FormsModule` and the `ReactiveFormsModule`, imported from `@angular/forms`.

### Template Driven Forms
We can achieve `Two Way Data Binding` in an Angular Template Driven Form, by assigning to the controller the banana box
binding:
```angular2html
ìnput name="inputName" [(ngModel)]="bindedProp"
```
