import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FeaturesRoutingModule } from './features-routing.module';
import { TemplateDrivenFormPasswordValidationComponent } from './template-driven-form-password-validation/template-driven-form-password-validation.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FeaturesRoutingModule,
  ],
  declarations: [TemplateDrivenFormPasswordValidationComponent],
})
export class FeaturesModule {}
