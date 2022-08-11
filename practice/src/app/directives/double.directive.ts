import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[double]'
})
export class Double {

  constructor(private templateReference: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set double(value: boolean) {
    if (value) {
      this.viewContainer.createEmbeddedView(this.templateReference);
      this.viewContainer.createEmbeddedView(this.templateReference);
    }
    else {
      this.viewContainer.createEmbeddedView(this.templateReference);
    }
  }
}
