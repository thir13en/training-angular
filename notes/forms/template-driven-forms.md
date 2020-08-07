# Template Driven Forms


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

### Custom validation in TDD
We can do so with a `directive`.
```typescript
import { Directive } from '@angular/core';
import { FormControl,NG_VALIDATORS, Validator } from '@angular/forms';

export const MIN_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    multi: true,
    useExisting:fordwardRed(() => DurationValidator),
}

@Directive({
    selector: '[duration][ngModel]',
    prividers: [MIN_LENGTH_VALIDATOR],
})
export class DurationValidator implements Validator {
    validate(control: FormControl): {[key: string]: any} {
        return validateDuration(c)
    }
}
```
The `DurationValidator` is not available to the dependency injection system at the moment 
of bootstrapping, so we can solve that with the `fordwardRef` function, that basically
tells the DI system that the reference is still not available, so it should be executed
in a callback at the moment of bootstrapping the app, the return value of the callback shall
be the element that we know will be available at that moment, so the Angular DI, registers
it in the convenient time.

### ngFormModel directive
```angular2html
<form [ngFormModel]="form" (ngSubmit)="onSubmit()">
   <p>
        <label>First Name:</label>
        <input type="text" ngControl="firstName">
   </p>
</form>
```
The use of `NgFormModel` allows binding the form to a variable of type `ControlGroup` in the component controller.
There we can use that variable to access the form observable via `form.valueChanges`.
```typescript
this.form.valueChanges
        .map((value) => {
            value.firstName = value.firstName.toUpperCase();
            return value;
        })
        .filter((value) => this.form.valid)
        .subscribe(validValue => ...);
```
