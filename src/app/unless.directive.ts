import { Directive } from '@angular/core';
import { Input } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
@Input() set appUnless(condition: boolean) {
  if (!condition) {
    this.vcRef.createEmbeddedView(this.templateRef);
  } else {
    this.vcRef.clear();
  }
}

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
