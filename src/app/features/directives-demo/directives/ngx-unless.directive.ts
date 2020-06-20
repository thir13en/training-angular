import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[ngxUnless]'
})
export class NgxUnlessDirective {

  private visible = false;

  constructor(
    // the manipulation of these guys is the key to structural directives creation
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) { }

  @Input()
  set ngxUnless(condition: boolean) {
    if (!(condition || this.visible)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.visible = true;
    } else if (condition && this.visible) {
      this.viewContainerRef.clear();
      this.visible = true;
    }
  }

}
