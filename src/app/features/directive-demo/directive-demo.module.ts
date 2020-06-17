import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveDemoRoutingModule } from './directive-demo-routing.module';
import { HighlightDirective } from '../../directives/highlight.directive';
import { DirectiveExamplesComponent } from './components/directive-examples/directive-examples.component';


@NgModule({
  imports: [
    CommonModule,
    DirectiveDemoRoutingModule,
  ],
  declarations: [
    DirectiveExamplesComponent,
    HighlightDirective,
  ],
})
export class DirectiveDemoModule { }
