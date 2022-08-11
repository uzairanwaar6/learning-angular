import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyling]'
})
export class Styling implements OnInit {

  @HostBinding('title') hostTitle: string = '';
  @HostBinding('style.color') color: string = '';
  @Input('appStyling') appStyling: string = '#556699';
  @Input('mouseEnterColor') mouseEnterColor: string = '#995566';
  @Input('mouseLeaveColor') mouseLeaveColor: string = '#669955';

  constructor(private elementReference: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    //this.renderer.setStyle(this.elementReference.nativeElement, 'color', 'green');

    this.color = this.appStyling;
    this.hostTitle = 'No Title';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hostTitle = 'Mouse Entered';
    this.color = this.mouseEnterColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hostTitle = 'Mouse Left';
    this.color = this.mouseLeaveColor;
  }

  //Implement HostListener, HostProperties, DirectiveProperties, StructuralDirectives, ngSwitch

}
