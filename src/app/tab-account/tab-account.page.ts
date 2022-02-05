import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_PATTERN, LETTER_ONLY_PATTERN, NUMERIC_PATTERN, TOAST_MESSAGE } from '../shared/constants';
import { User } from '../shared/models';
import { AuthService, ToastService, UserService } from '../shared/services';

@Component({
  selector: 'app-tab-account',
  templateUrl: 'tab-account.page.html',
  styleUrls: ['tab-account.page.scss']
})
export class TabAccountPage implements OnInit {
  @ViewChild('accountPageForm') accountPageForm: NgForm;
  readonly defaultEmailPattern: string = DEFAULT_EMAIL_PATTERN;
  readonly numericPattern: string = NUMERIC_PATTERN;
  readonly letterOnlyPattern: string = LETTER_ONLY_PATTERN;
  user: User;
  isEditing: boolean;
  isSubmitting: boolean;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private toastService: ToastService
  ) {}


  ngOnInit(): void {
    this.initializeData();
  }

  ionViewWillEnter(): void {
    this.initializeData();
  }

  initializeData(): void {
    this.isEditing = false;
    if(!this.user) {
      this.user = this.authService.getUser();
    }
  }

  async logout(): Promise<void> {
    await this.authService.logout();
    this.user = {};
  }

  editDetails(): void {
    this.isSubmitting = false;
    this.isEditing = !this.isEditing;
  }

  cancelEditDetails(): void {
    this.isEditing = !this.isEditing;
    this.initializeData();
  }

  saveDetails(): void {
    this.isSubmitting = true;
    this.userService.updateUser(this.user).then(() => {
      this.toastService.showSuccessToast(TOAST_MESSAGE.accountUpdateSuccess);
    }).catch(() => {
      this.toastService.showErrorToast(TOAST_MESSAGE.accountUpdateError);
    }).finally(() => {
      this.isSubmitting = false;
      this.isEditing = !this.isEditing;
    });
  }

}
