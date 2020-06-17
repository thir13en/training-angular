import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HDemoContainerComponent } from './components/h-demo-container/h-demo-container.component';


const routes: Routes = [
  { path: '', component: HDemoContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectiveDemoRoutingModule { }
