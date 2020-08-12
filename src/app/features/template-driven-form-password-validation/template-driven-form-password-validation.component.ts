import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
  template: `
    <section id="form-password-validation">
      <form #f="ngForm">

      </form>
    </section>
  `,
  styles: [`

  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateDrivenFormPasswordValidationComponent {}
