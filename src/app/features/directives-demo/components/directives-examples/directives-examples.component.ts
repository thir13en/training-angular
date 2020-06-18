import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './directives-examples.component.html',
  styleUrls: ['./directives-examples.component.scss']
})
export class DirectivesExamplesComponent implements OnInit {
  @Input()
  private isHighlighted = false;

  constructor() { }

  ngOnInit(): void {
  }

  // you need to apply a typescript getter method in order for this host binding to work
  // this adds always a classname highlighted
  // @HostBinding('className')
  // get cssClasses() {
  //   return 'highlighted';
  // }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

}
