import { AfterViewInit, Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: 'ion-button[appButtonSpinner]'
})
export class ButtonSpinnerDirective implements OnChanges, AfterViewInit {
  @Input() appButtonSpinner: boolean;
  @Input() success = false;
  @Input() successText: string;
  @Input() loadingText: string;
  @Input() buttonText: string;
  originalInnerValue: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && this.originalInnerValue) {
      this.loadingText = this.loadingText?.trim() || '';
      this.renderer.setProperty(
        this.el.nativeElement,
        'innerHTML',
        (this.appButtonSpinner ?
          `<ion-spinner name='crescent'></ion-spinner> ${this.loadingText}` :
          (this.buttonText ? this.buttonText : this.originalInnerValue)));
      this.renderer.setProperty(this.el.nativeElement, 'disabled', (this.appButtonSpinner || this.success));

      if (this.success) {
        this.renderer.setProperty(
          this.el.nativeElement,
          'innerHTML',
          (this.successText ? this.successText : `<ion-icon name="checkmark-outline"></ion-icon>`));
      }
    }
  }

  ngAfterViewInit(): void {
    this.originalInnerValue = this.el.nativeElement.innerHMTL || this.el.nativeElement.innerText;
  }
}
