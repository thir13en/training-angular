import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesDemoRoutingModule } from './directives-demo-routing.module';
import { HighlightDirective } from './directives/highlight.directive';
import { DirectivesExamplesComponent } from './components/directives-examples/directives-examples.component';
import { DirectivesDummyComponent } from './components/directives-dummy/directives-dummy.component';


@NgModule({
  imports: [
    CommonModule,
    DirectivesDemoRoutingModule,
  ],
  declarations: [
    DirectivesExamplesComponent,
    HighlightDirective,
    DirectivesDummyComponent,
  ],
})
export class DirectivesDemoModule { }
