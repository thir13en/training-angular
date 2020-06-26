import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';


@Directive({
  selector: '[highlight]',
  exportAs: 'hl',
})
export class HighlightDirective {
  @Input('highlight')
  private isHighlighted = false;

  // directives can also emit events
  @Output()
  highlightChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    console.log('works');
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

  // to write to native html attributes
  @HostBinding('attr.disabled')
  get isDisabled() {
    return true;
  }

  @HostListener('click', ['$event'])
  handleClick($event: MouseEvent) {
    alert('click');
    console.log($event);
    this.toggle();
  }

  // lets suppose that this method is thought out to be used for third party components
  toggle() {
    this.isHighlighted = !this.isHighlighted;
  }

}