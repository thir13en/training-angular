import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectiveExamplesComponent } from './components/directive-examples/directive-examples.component';


const routes: Routes = [
  { path: '', component: DirectiveExamplesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectiveDemoRoutingModule { }
