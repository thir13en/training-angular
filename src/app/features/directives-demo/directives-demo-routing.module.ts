import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectivesExamplesComponent } from './components/directives-examples/directives-examples.component';
import { StrucDirectivesExampleComponent } from './components/struc-directives-example/struc-directives-example.component';


const routes: Routes = [
  { path: '', component: DirectivesExamplesComponent },
  { path: 'struc', component: StrucDirectivesExampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesDemoRoutingModule { }
