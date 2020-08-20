import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesDemoRoutingModule } from './directives-demo-routing.module';
import { DirectivesDummyComponent } from './components/directives-dummy/directives-dummy.component';
import { DirectivesExamplesComponent } from './components/directives-examples/directives-examples.component';
import { HighlightDirective } from './directives/highlight.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { StrucDirectivesExampleComponent } from './components/struc-directives-example/struc-directives-example.component';


@NgModule({
  imports: [
    CommonModule,
    DirectivesDemoRoutingModule,
  ],
  declarations: [
    HighlightDirective,
    NgxUnlessDirective,
    DirectivesExamplesComponent,
    DirectivesDummyComponent,
    StrucDirectivesExampleComponent,
  ],
})
export class DirectivesDemoModule { }
