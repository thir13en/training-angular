import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';


@Directive({
  selector: '[appHighlight]',
  exportAs: 'hl',
})
export class HighlightDirective {
  @Input('appHighlight')
  private isHighlighted = false;

  // directives can also emit events
  @Output()
  highlightChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

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

  // to write to native html attributes
  @HostBinding('attr.disabled')
  get isDisabled() {
    return true;
  }

  @HostListener('click', ['$event'])
  handleClick($event: MouseEvent) {
    this.toggle();
  }

  // lets suppose that this method is thought out to be used for third party components
  toggle() {
    this.isHighlighted = !this.isHighlighted;
  }

}
