import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_PATTERN, LETTER_ONLY_PATTERN, NUMERIC_PATTERN } from '../shared/constants';
import { SignUpRequest } from '../shared/models';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  @ViewChild('signUpForm') signUpForm: NgForm;
  readonly defaultEmailPattern: string = DEFAULT_EMAIL_PATTERN;
  readonly numericPattern: string = NUMERIC_PATTERN;
  readonly letterOnlyPattern: string = LETTER_ONLY_PATTERN;

  user: SignUpRequest = {};

  constructor() { }

  ngOnInit() {
  }

  signUp(): void {
    console.log('sign-up');
  }

}
