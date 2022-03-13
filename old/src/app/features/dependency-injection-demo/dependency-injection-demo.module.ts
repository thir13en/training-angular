import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependencyInjectionDemoRoutingModule } from './dependency-injection-demo-routing.module';
import { DepInjectionOneComponent } from './components/dep-injection-one/dep-injection-one.component';


@NgModule({
  imports: [
    CommonModule,
    DependencyInjectionDemoRoutingModule
  ],
  declarations: [DepInjectionOneComponent],
})
export class DependencyInjectionDemoModule { }
