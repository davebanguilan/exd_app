import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

import { validateConfirmPassword } from '../validators';

@Directive({
  selector: '[appConfirmPasswordValidate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ConfirmPasswordValidatorDirective, multi: true }]
})
export class ConfirmPasswordValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: ValidatorFn } | null {
    return validateConfirmPassword()(control);
  }
}
