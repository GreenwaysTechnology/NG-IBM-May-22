import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {
    console.log('works')
  }
  //logic for custom attributes
  @HostListener('mouseenter')
  onMouseEnter() {
    this.highLight('blue')
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.highLight(null)
  }
  private highLight(color: any) {
    this.element.nativeElement.style.backgroundColor = color
  }

}
