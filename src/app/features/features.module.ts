import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { FeaturesRoutingModule } from './features-routing.module';
import { TemplateDrivenFormPasswordValidationComponent } from './template-driven-form-password-validation/template-driven-form-password-validation.component';
import { HighlightDirective, NgxUnlessDirective } from './directives-demo/directives';
import {
  DirectivesExamplesComponent,
  DirectivesDummyComponent,
  StrucDirectivesExampleComponent,
} from './directives-demo/components';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    FeaturesRoutingModule,
  ],
  declarations: [
    HighlightDirective,
    NgxUnlessDirective,
    DirectivesExamplesComponent,
    DirectivesDummyComponent,
    StrucDirectivesExampleComponent,
    TemplateDrivenFormPasswordValidationComponent,
  ],
})
export class FeaturesModule {}
