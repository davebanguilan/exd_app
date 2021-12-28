/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective, NgForm } from '@angular/forms';
import { Params } from '@angular/router';

import {
  ALPHANUMERIC_PATTERN,
  DEFAULT_EMAIL_PATTERN,
  FORBIDDEN_CHARS_PATTERN,
  LETTER_ONLY_PATTERN,
  NUMERIC_PATTERN,
  PASSWORD_MIN_LENGTH
} from '../../constants';
import {
  EmailRequirement,
  PasswordRequirement,
  PhoneNumberValidation,
  ConfirmPasswordRequirement
} from '../../enums';

const SUPPORTED_PATTERNS: Record<string, string> = {
  [ALPHANUMERIC_PATTERN]: 'alpha-numeric',
  [DEFAULT_EMAIL_PATTERN]: 'email',
  [FORBIDDEN_CHARS_PATTERN]: 'forbidden-characters',
  [NUMERIC_PATTERN]: 'numeric',
  [LETTER_ONLY_PATTERN]: 'letter-only'
};

const PATTERN_ERRORS: Record<string, (fieldName: string) => string> = {
  'alpha-numeric': (fieldName: string) => `${fieldName} must be alpha numeric`,
  'forbidden-characters': (fieldName: string) => `${fieldName} cannot contain forbidden characters`,
  'letter-only': (fieldName: string) => `${fieldName} format is incorrect`,
  numeric: (fieldName: string) => `${fieldName} must be a number`,
  email: (fieldName: string) => fieldName.toLowerCase() === 'email' ?
    'Input must be a valid email' : `${fieldName} must be a valid email`
};

const ERROR_MESSAGES: Record<string, (params: Params, fieldName: string) => string> = {
  ngbDate: (params, fieldName) => `${fieldName} must be a valid date`,
  required: (params, fieldName) => `${fieldName} is required`,
  pattern: (params, fieldName) => PATTERN_ERRORS[SUPPORTED_PATTERNS[params.requiredPattern as string]](fieldName),
  numeric: (params, fieldName) => `${fieldName} must be numeric`,
  email: (params, fieldName) => `${fieldName} must be a valid email address`,
  [PasswordRequirement.LowerCase]: (params, fieldName) => `${fieldName} must contain a lowercase letter`,
  [PasswordRequirement.UpperCase]: (params, fieldName) => `${fieldName} must contain an uppercase letter`,
  [PasswordRequirement.Number]: (params, fieldName) => `${fieldName} must contain a number`,
  [PasswordRequirement.SpecialCharacter]: (params, fieldName) => `${fieldName} must contain a special character`,
  [PasswordRequirement.Length]: (params, fieldName) => `${fieldName} must contain at least ${PASSWORD_MIN_LENGTH} characters`,
  [ConfirmPasswordRequirement.ConfirmPasswordMismatch]: (params, fieldName) => `${fieldName} and password must match`,
  [EmailRequirement.EmailExistsNotAllowed]: (params, fieldName) => 'Email already exists.',
  [EmailRequirement.ValidationCheckError]: (params, fieldName) => 'Email validation request failed. Please try again.',
  [PhoneNumberValidation.InvalidNumber]: (params, fieldName) => `${fieldName} is not a valid phone number.`,
  [PhoneNumberValidation.InvalidCountryCode]: (params, fieldName) => `${fieldName} has invalid country code.`,
  [PhoneNumberValidation.TooLong]: (params, fieldName) => `${fieldName} is too long.`,
  [PhoneNumberValidation.TooShort]: (params, fieldName) => `${fieldName} is too short.`
};

@Component({
  selector: 'app-inline-validation-message',
  template: `
    <ng-container *ngIf='isLoading'>
      <p class="inline-default-message">{{loadingText}}</p>
    </ng-container>

    <ion-item class="container--error-message" lines="none" *ngIf='shouldShowErrors()'>
      <div class="container--error" *ngFor='let error of listOfErrors()'>
        <ion-icon class="ion-no-margin" slot="start" name="information-circle-outline"></ion-icon>
        <span class="ion-no-margin">{{error}}</span>
      </div>
    </ion-item>
  `
})
export class InlineValidationMessageComponent {
  @Input()
  loadingText: string;

  @Input()
  isLoading: boolean;

  @Input()
  showImmediately: boolean;

  @Input()
  form: NgForm;

  @Input()
  control: AbstractControlDirective | AbstractControl;

  @Input()
  fieldName: string;

  constructor(
  ) { }

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors && (this.form.submitted || this.showImmediately) &&
      (this.control.dirty || this.control.touched || this.form.submitted);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: Params): string {
    return ERROR_MESSAGES[type](params, this.fieldName);
  }
}
