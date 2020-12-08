import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormPasswordValidationComponent } from './template-driven-form-password-validation/template-driven-form-password-validation.component';
import { DirectivesExamplesComponent, StrucDirectivesExampleComponent } from '@features/directives-demo/components';
import { ROUTE_FRAGMENTS } from '@core/routes';
import { RxjsDemoComponent } from '@features/rxjs-demo/rxjs-demo.component';


const FEATURES_ROUTES: Routes = [
  {
    path: ROUTE_FRAGMENTS.TEMPLATE_DRIVEN_FORMS,
    component: TemplateDrivenFormPasswordValidationComponent,
  },
  {
    path: ROUTE_FRAGMENTS.RXJS,
    component: RxjsDemoComponent,
  },
  {
    path: ROUTE_FRAGMENTS.DIRECTIVES,
    children: [
      {
        path: ROUTE_FRAGMENTS.STRUCTURAL,
        component: StrucDirectivesExampleComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        component: DirectivesExamplesComponent,
      },
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
