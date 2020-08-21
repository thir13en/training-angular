import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';


@Component({
  template: `
    <h1 class="mt-md3">Password Validation example</h1>

    <form #f="ngForm" autocomplete="off" novalidate>

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
          *ngIf="email.errors?.required && email.touched"
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

      <div class="mb-sm3">
        <button type="submit" [disabled]="!f.touched || f.invalid">Sign up!</button>
      </div>

    </form>
  `,
  styles: [`
    form {
      border: 1px solid #333;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateDrivenFormPasswordValidationComponent {
  @HostBinding('class') classList = 'd-flex flex-column align-items-center w-100';
}
