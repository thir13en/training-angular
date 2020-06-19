import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesDemoRoutingModule } from './directives-demo-routing.module';
import { HighlightDirective } from './directives/highlight.directive';
import { DirectivesExamplesComponent } from './components/directives-examples/directives-examples.component';
import { DirectivesDummyComponent } from './components/directives-dummy/directives-dummy.component';
import { StrucDirectivesExampleComponent } from './components/struc-directives-example/struc-directives-example.component';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';


@NgModule({
  imports: [
    CommonModule,
    DirectivesDemoRoutingModule,
  ],
  declarations: [
    DirectivesExamplesComponent,
    HighlightDirective,
    DirectivesDummyComponent,
    StrucDirectivesExampleComponent,
    NgxUnlessDirective,
  ],
})
export class DirectivesDemoModule { }
