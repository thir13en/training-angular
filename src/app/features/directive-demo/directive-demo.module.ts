import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveDemoRoutingModule } from './directive-demo-routing.module';
import { HighlightDemoComponent } from './components/highlight-demo/highlight-demo.component';
import { HDemoContainerComponent } from './components/h-demo-container/h-demo-container.component';


@NgModule({
  declarations: [HighlightDemoComponent, HDemoContainerComponent],
  imports: [
    CommonModule,
    DirectiveDemoRoutingModule
  ]
})
export class DirectiveDemoModule { }
