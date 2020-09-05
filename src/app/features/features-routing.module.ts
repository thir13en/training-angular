import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormPasswordValidationComponent } from './template-driven-form-password-validation/template-driven-form-password-validation.component';
import { DirectivesExamplesComponent, StrucDirectivesExampleComponent } from '@features/directives-demo/components';
import { ROUTE_FRAGMENTS } from '@core/routes';


const FEATURES_ROUTES: Routes = [
  {
    path: ROUTE_FRAGMENTS.TEMPLATE_DRIVEN_FORMS,
    component: TemplateDrivenFormPasswordValidationComponent,
  },
  {
    path: 'directives',
    children: [
      { path: '', component: DirectivesExamplesComponent },
      { path: 'struc', component: StrucDirectivesExampleComponent },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ROUTE_FRAGMENTS.TEMPLATE_DRIVEN_FORMS,
  },
];

@NgModule({
  imports: [RouterModule.forChild(FEATURES_ROUTES)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
