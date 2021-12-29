import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DEFAULT_EMAIL_PATTERN, ROUTEURL } from '../shared/constants';
import { SignInRequest } from '../shared/models';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  @ViewChild('signInForm') signInForm: NgForm;
  readonly defaultEmailPattern: string = DEFAULT_EMAIL_PATTERN;

  user: SignInRequest = {};

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  signIn(): void {
    this.router.navigateByUrl(ROUTEURL.tabs);
  }

  signUp(): void {
    this.router.navigateByUrl(ROUTEURL.signUp);
  }

}
