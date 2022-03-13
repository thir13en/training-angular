import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';


@Component({
  template: `
    <h1 class="mat-headline m-md3 c-dark">Password Validation example</h1>

    <form
      #f="ngForm"
      class="mb-md2 p-md1 pr-md2 pl-md2 bg-white rounded w-25 mat-elevation-z3"
      autocomplete="off"
      novalidate
      (ngSubmit)="acceptMember(password, confirm)"
    >

      <div class="d-flex flex-column mb-sm3">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          ngModel
          #name="ngModel"
          required
        >
        <p
          *ngIf="name.invalid && name.touched"
          class="error-message c-warn"
        >This field is mandatory</p>
      </div>

      <div class="d-flex flex-column mb-sm3">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          ngModel
          #email="ngModel"
          required
        >
        <!-- Another way to validate with specific errors -->
        <p
          *ngIf="email.errors?.['required'] && email.touched"
          class="error-message c-warn"
        >This field is mandatory</p>
      </div>

      <div class="d-flex flex-column mb-sm3">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          ngModel
          #password="ngModel"
          required
        >
        <p
          *ngIf="password.invalid && password.touched"
          class="error-message c-warn"
        >This field is mandatory</p>
      </div>

      <div class="d-flex flex-column mb-sm3">
        <label for="confirm">Confirm password:</label>
        <input
          type="password"
          id="confirm"
          name="confirm"
          ngModel
          #confirm="ngModel"
          required
        >
        <p
          *ngIf="confirm.invalid && confirm.touched"
          class="error-message c-warn"
        >This field is mandatory</p>
      </div>

      <div class="d-flex justify-content-end mb-sm3">
        <p
          *ngIf="f.submitted && password.value !== confirm.value"
          class="error-message c-warn"
        >Please, make sure both passwords match</p>
      </div>

      <div class="mb-sm3 d-flex justify-content-end">
        <button
          type="submit"
          mat-button
          color="primary"
          [disabled]="!f.touched || f.invalid"
        >Sign up!</button>
      </div>

    </form>
    <div *ngIf="peterOpensDoor" class="d-flex justify-content-center">
      <img
        src="https://muywaso.com/wp-content/uploads/2018/12/aff275c30c0eafcf5fc1cd259f58384e-rimg-w640-h346-gmir.jpg"
        alt="Yisus"
      />
    </div>
  `,
  styleUrls: ['./template-driven-form-password-validation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateDrivenFormPasswordValidationComponent {
  @HostBinding('class') classList = 'd-flex flex-column align-items-center w-100';
  peterOpensDoor = false;

  acceptMember(passphrase: NgModel, confirm: NgModel): void {
    if (passphrase.value === confirm.value) {
      this.peterOpensDoor = true;
      alert('Welcome to heaven, pal!');
    }
  }
}
