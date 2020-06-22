import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepInjectionOneComponent } from './components/dep-injection-one/dep-injection-one.component';


const routes: Routes = [
  { path: '', component: DepInjectionOneComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DependencyInjectionDemoRoutingModule { }
