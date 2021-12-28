/* eslint-disable */
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { PASSWORD_MIN_LENGTH, PASSWORD_VALIDATION_CONSTRAINTS } from '../constants';
import { PasswordRequirement } from '../enums';
import { PasswordConstraint } from '../models';

export function validatePassword(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control?.value) {
      const validations: PasswordConstraint[] = PASSWORD_VALIDATION_CONSTRAINTS;

      const errors: string[] = [];
      for (const validation of validations) {
        if (!control.value.match(validation.pattern)) {
          errors.push(validation.key);
        }
      }

      if (control.value.length < PASSWORD_MIN_LENGTH) {
        errors.push(PasswordRequirement.Length);
      }

      if (errors.length) {
        return errors.reduce((a: unknown, b: string): unknown => (a[b] = true, a), {});
      }
    }
  };
}
