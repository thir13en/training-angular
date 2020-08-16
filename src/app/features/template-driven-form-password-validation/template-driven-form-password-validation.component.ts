import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';


@Component({
  template: `
    <form #f="ngForm" autocomplete="off" novalidate>

      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <p class="error-message c-accent">This field is mandatory</p>
      </div>

      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        <p class="error-message">This field is mandatory</p>
      </div>

      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
      </div>

      <div>
        <label for="confirm">Confirm password:</label>
        <input type="password" id="confirm" name="confirm">
      </div>

      <button type="submit">Sign up!</button>

    </form>
  `,
  styles: [`

  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateDrivenFormPasswordValidationComponent {
  @HostBinding('class') classList = 'd-flex';
}
