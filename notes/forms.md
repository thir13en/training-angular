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

### Using ngModel to show errors to the user
You can export ngModel to add error validation:
```angular2html
<div class="form-field">
    <label>Title</label>
    <input
        #title="ngModel"
        [(ngModel)]="whatever"
        type="text"
        name="title"
        required
        minlength="5"
        maxlength="15"
    >
</div>
<div class="field-error-message" *ngIf="title?.dirty && title?.errors?.required">
    Field is mandatory
</div>
<div class="field-error-message" *ngIf="title?.dirty && title?.errors?.minlength">
    min length is 5 characters
</div>
```

### Mark whole sections of the form as errored
You can do so with the `ngModelGroup`, like so:
```angular2html
<!-- Do we really need to do this two things? looks to me like the second one is perfectly valid -->
<fieldset ngModelGroup="mySectionName" #mySectionName="ngModelGroup">
    <legend [ngClass]="{ error: !mySectionName.valid && !mySectionName.pristine }"></legend>
    <!-- Whatever inputs we have here, if one of them is errored, the section will reflect it -->
</fieldset>
```

### Reactive Forms
We basically need:
1. A `FormGroup` that holds the whole form and it's state
1. A set of `FormControls`
As a support directives, we have the `formGroup` and the `formControlName` ones.  
Here you are an example of the set up of a `FromGroup` in the controller.
```javascript
this.myForm = new FormGroup({
    title: new FormControl(''),
    duration: new FormControl(null),
    description: new FormControl(''),
})
```

