import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { DirectivesDummyComponent } from '../directives-dummy/directives-dummy.component';

@Component({
  templateUrl: './directives-examples.component.html',
  styleUrls: ['./directives-examples.component.scss']
})
export class DirectivesExamplesComponent implements AfterViewInit {
  // getting a reference to a directive
  @ViewChild(HighlightDirective)
  highlightDirective!: HighlightDirective;

  // another way to express it
  @ViewChild(DirectivesDummyComponent, {read: HighlightDirective})
  highlightDirective2!: HighlightDirective;

  constructor() { }

  ngAfterViewInit(): void {
    console.log(this.highlightDirective);
    console.log(this.highlightDirective2);
  }

}
