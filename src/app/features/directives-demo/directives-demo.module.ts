import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesDemoRoutingModule } from './directives-demo-routing.module';
import { HighlightDirective } from './directives/highlight.directive';
import { DirectivesExamplesComponent } from './components/directives-examples/directives-examples.component';


@NgModule({
  imports: [
    CommonModule,
    DirectivesDemoRoutingModule,
  ],
  declarations: [
    DirectivesExamplesComponent,
    HighlightDirective,
  ],
})
export class DirectivesDemoModule { }
