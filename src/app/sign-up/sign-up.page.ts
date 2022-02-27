import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {
  DEFAULT_EMAIL_PATTERN,
  ERROR_MESSAGES_MAIN,
  ERROR_MESSAGES_SUB,
  LETTER_ONLY_PATTERN,
  NUMERIC_PATTERN, ROUTEURL } from '../shared/constants';
import { User } from '../shared/models';
import { AlertModalService, UserService } from '../shared/services';

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

  user: User = {};
  isSubmitting: boolean;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertModalService: AlertModalService
  ) { }

  ngOnInit() {
  }

  signUp(): void {
    this.isSubmitting = true;
    this.userService
      .createUserByEmail(this.user)
      .then(() => {
        this.router.navigateByUrl(ROUTEURL.tabs);
      })
      .catch(async (error) => {
        await this.alertModalService.setOkayModalAlert(ERROR_MESSAGES_MAIN[error.code], ERROR_MESSAGES_SUB[error.code]);
      })
      .finally(() => this.isSubmitting = false);
  }

  login(): void {
    this.router.navigateByUrl(ROUTEURL.login);
  }

}
