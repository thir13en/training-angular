# Reactive Forms


We basically need:
1. A `FormGroup` that holds the whole form and it's state
1. A set of `FormControls`
As a support directives, we have the `formGroup` and the `formControlName` ones.  
Here you are an example of the set up of a `FromGroup` in the controller.
```javascript
this.myForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    duration: new FormControl(null),
    description: new FormControl(''),
})
```

### Using the `FormBuilder` to create forms
```javascript
this.myForm = fb.group({
    title: ['', [Validators.required]],
    duration: [null],
    description: [''],
})
```

### Why the name "Reactive Forms"?
The `FormControl` and `FormGroup` classes expose an `Observable` API that 
can be used for `Reactive Programming` practises.
```javascript
this.myForm.valueChanges.subscribe(stuffToHappen);
```
We have all the power of all the `RxJs` operators to process the values of the forms.

### Display error messages
Follow this example blueprint
```angular2html
<form [formGroup]="form">
    <div class="form-field">
        <label for="example">Example</label>
        <input type="text" formControlName="example" />
        <div *ngIf="form.controls.example.errors?.required" class="form-field-error">
            <p>Field is Required</p>
        </div>
    </div>
</form>
```

### Initializing FormControls separately
```angular2
@Component({
  ...  
})
export class ExampleComponent implements OnInit {
    
    exampleControl = new FormControl(10, [Validators.required, Validators.pattern('[0-9]+')]);

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.fb.create({
            exampleControl: this.exampleControl,
        })
    }

}
```
This allows for a more powerful configuration of the control being done outside the form builder, with less of a code bload on it.  
Also, you can bind now the control created in the controller, straight to the `[formControl]` directive.
```angular2html
<input type="text" [formControl]="exampleControl">
```

### Adding Custom Validators
A custom validator is just a plain `function`. In order to use it, we just need to pass it to the validation array.
```angular2
@Component({
  ...  
})
export class ExampleComponent implements OnInit {

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.fb.create({
            duration: new FormControl(10, [validateDuration]);,
        })
    }

}
```
And in another file, the function could look like this:
```typescript
export function validateDuration(ctrl: FromControl) {

	const numValue = parseIng(ctrl.value);

	const valid = numValue && numValue < 10;

	return valid ? null : {
		validDuration: {
			valid: false;
		}
	};

}
```