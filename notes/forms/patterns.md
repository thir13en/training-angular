# Patterns


### File picker in Angular Material
Angular Material does not support a `file picker` element in `form field` by default, but here is a code pattern you can use to work around it and
get that functionality with Angular Material.

```angular2html
<form #f="ngForm">

    <div class="w-100">
      <h3 class="mat-h3 m-none">Input that reflects the file name</h3>
      <mat-form-field class="mr-sm3 w-100">
        <input
          matInput
          type="text"
          placeholder=""
          [value]="getFileName(fileInput)"
          disabled
        />
        <mat-error *ngIf="file.invalid && file.touched">Err message</mat-error>
      </mat-form-field>
    
      <!-- this field is hidden -->
      <!-- take a look a the accept attribute to communicate to the dialog what kind of files are accepted by the picker -->
      <input
        #fileInput
        id="file"
        name="file"
        type="file"
        accept="image/*"
        required
        hidden
        ngModel
        #file="ngModel"
        (change)="f.controls.map.markAsDirty()"
      />
    </div>
    
    <div class="d-flex justify-content-end">
      <button
        mat-stroked-button
        color="primary"
        type="button"
        class="w-50 ml-sm3"
        (click)="pickFile(mapInput, f.controls.file)"
      >Upload</button>
    </div>

</form>
```

```javascript
import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';


@Component({
  templateUrl: './areas-new.component.html',
  styleUrls: ['./areas-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreasNewComponent {
  @HostBinding('class') classList = 'd-flex flex-column w-100 p-md3';

  pickFile(input: HTMLInputElement, mapControl: AbstractControl): void {
    input.click();
    mapControl.markAsTouched();
  }

  getFileName(mapInput: HTMLInputElement): string {
    return mapInput.files?.length ? mapInput.files[0].name : '';
  }

}

```
