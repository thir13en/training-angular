import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { FeaturesRoutingModule } from './features-routing.module';
import { TemplateDrivenFormPasswordValidationComponent } from './template-driven-form-password-validation/template-driven-form-password-validation.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    FeaturesRoutingModule,
  ],
  declarations: [TemplateDrivenFormPasswordValidationComponent],
})
export class FeaturesModule {}
