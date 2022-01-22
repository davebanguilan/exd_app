import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DEFAULT_EMAIL_PATTERN, ROUTEURL } from '../shared/constants';
import { SignInRequest } from '../shared/models';
import { UserService } from '../shared/services';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  @ViewChild('signInForm') signInForm: NgForm;
  readonly defaultEmailPattern: string = DEFAULT_EMAIL_PATTERN;

  user: SignInRequest = {};
  isSubmitting = false;

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  signIn(): void {
    this.isSubmitting = true;
    this.userService
      .emailLogin(this.user)
      .then(() => {
        this.router.navigateByUrl(ROUTEURL.tabs);
      })
      .catch((error) => {
        //catch error
      })
      .finally(() => {
        this.isSubmitting = false;
      });
  }

  signUp(): void {
    this.router.navigateByUrl(ROUTEURL.signUp);
  }

}
