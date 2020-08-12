import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-template-driven-form-password-validation',
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
