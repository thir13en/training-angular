import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormPasswordValidationComponent } from './template-driven-form-password-validation/template-driven-form-password-validation.component';


const FEATURES_ROUTES: Routes = [
  {
    path: '',
    component: TemplateDrivenFormPasswordValidationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(FEATURES_ROUTES)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
