import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDigitsOnly]'
})
export class DigitsOnlyDirective {
  @Input() allowCharacters: string[] = [];
  @Input() allowDecimalPoint = false;
  @Input() allowNegativeNumbers = false;

  private inputElement: HTMLInputElement;
  private navigationKeys: string[] = [
    'Backspace',
    'Delete',
    'Tab',
    'Escape',
    'Enter',
    'Home',
    'End',
    'ArrowLeft',
    'ArrowRight',
    'Clear',
    'Copy',
    'Paste'
  ];

  constructor(public el: ElementRef) {
    this.inputElement = el.nativeElement;
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent): void {
    if (
      this.navigationKeys.indexOf(e.key) > -1 ||
      (e.key === 'a' && e.ctrlKey) ||
      (e.key === 'c' && e.ctrlKey) ||
      (e.key === 'v' && e.ctrlKey) ||
      (e.key === 'x' && e.ctrlKey) ||
      (e.key === 'a' && e.metaKey) ||
      (e.key === 'c' && e.metaKey) ||
      (e.key === 'v' && e.metaKey) ||
      (e.key === 'x' && e.metaKey)
    ) {
      return;
    }

    if (
      (e.key === ' ' || isNaN(Number(e.key))) &&
      !this.allowCharacters.includes(e.key) &&
      !this.checkNegativeSymbol(e.key) &&
      !this.checkDecimalPoint(e.key)) {
      e.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const pastedInput: string = event.clipboardData.getData('text/plain').replace(this.getNotAllowedCharacters(), '');
    document.execCommand('insertText', false, pastedInput);
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent): void {
    event.preventDefault();
    const text: string = event.dataTransfer.getData('text').replace(this.getNotAllowedCharacters(), '');
    this.inputElement.focus();
    document.execCommand('insertText', false, text);
  }

  private getNotAllowedCharacters(): RegExp {
    let pattern = '0-9';

    if (this.allowDecimalPoint) {
      pattern += '.';
    }

    if (this.allowNegativeNumbers) {
      pattern += '-';
    }

    return new RegExp(`[^${pattern}]`, 'g');
  }

  private checkNegativeSymbol(key: string): boolean {
    if (key === '-' && this.allowNegativeNumbers) {
      return !this.inputElement?.value || this.inputElement.selectionStart === 0;
    }
  }

  private checkDecimalPoint(key: string): boolean {
    if (key === '.' && this.allowDecimalPoint) {
      return !!this.inputElement?.value?.length && !this.inputElement?.value?.includes('.');
    }
  }
}
