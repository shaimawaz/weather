import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHeader]'
})
export class HeaderDirective {

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll') onWindowScroll() {
    this.resize();
  }
  private resize() {
    this.el.nativeElement.style.backgroundColor = 'red';
  }
}
