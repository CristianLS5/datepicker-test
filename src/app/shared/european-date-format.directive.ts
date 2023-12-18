import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEuropeanDateFormat]',
  standalone: true,
})
export class EuropeanDateFormatDirective {

  errorMessage: boolean | null = null;

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    const input = (event.target as HTMLInputElement);
    //const input = this.el.nativeElement as HTMLInputElement;
    let value = input?.value;

    // Handle deletion of slashes
    if (event.inputType === 'deleteContentBackward') {
      if (value.endsWith('/') && (value.length === 3 || value.length === 6)) {
        // Remove the last two characters (digit and slash)
        input.value = value.slice(0, -2);
        return; // Exit early
      }
    }

    // Limit the input length to 10 characters (DD/MM/YYYY)
    if (value.length > 10) {
      this.errorMessage = true;
      input.value = value.substring(0, 10);
    } else {
      this.errorMessage = null;
    }

    // Logic to insert '/' after 2 digits and 5 digits
    if (event.inputType !== 'deleteContentBackward') {
      if (value.length === 2 || value.length === 5) {
        input.value = value + '/';
      }
    }
  }
}
