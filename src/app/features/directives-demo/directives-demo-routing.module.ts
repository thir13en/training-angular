import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectivesExamplesComponent } from './components/directives-examples/directives-examples.component';


const routes: Routes = [
  { path: '', component: DirectivesExamplesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesDemoRoutingModule { }
