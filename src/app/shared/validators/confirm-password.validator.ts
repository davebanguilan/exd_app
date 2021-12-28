/* eslint-disable */
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ConfirmPasswordRequirement } from '../enums';

export function validateConfirmPassword(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control?.value) {
      const errors: string[] = [];

      if (control.value !== (control.parent).get('password').value) {
        errors.push(ConfirmPasswordRequirement.ConfirmPasswordMismatch);
      }

      if (errors.length) {
        return errors.reduce((a: unknown, b: string): unknown => (a[b] = true, a), {});
      }
    }
  };
}
