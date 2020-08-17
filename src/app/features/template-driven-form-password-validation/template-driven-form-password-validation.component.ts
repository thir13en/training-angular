import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';


@Component({
  template: `
    <form #f="ngForm" autocomplete="off" novalidate>

      <div class="d-flex justify-content-end">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" ngModel required>
        <p class="error-message c-warn">This field is mandatory</p>
      </div>

      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" ngModel required>
        <p class="error-message c-warn">This field is mandatory</p>
      </div>

      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" ngModel required>
      </div>

      <div>
        <label for="confirm">Confirm password:</label>
        <input type="password" id="confirm" name="confirm" ngModel required>
      </div>

      <button type="submit" [disabled]="!f.touched || f.invalid">Sign up!{{f.invalid}}</button>

    </form>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateDrivenFormPasswordValidationComponent {
  @HostBinding('class') classList = 'd-flex';
}
