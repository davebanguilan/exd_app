import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PATHURL, ROUTEURL, TOAST_MESSAGE } from '../../constants';
import { User } from '../../models';
import { ToastService, UserConnectionService } from '../../services';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  @Input() user: User;
  @Input() isUserAlreadyConnected: boolean;
  @Output() isCancelled = new EventEmitter<boolean>();
  isSubmitting = false;

  constructor(
    private connectionService: UserConnectionService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ionViewWillEnter(): void {
  }

  addUser(): void {
    this.isSubmitting = true;
    this.connectionService.addConnection(this.user).then(() => {
      this.toastService.showSuccessToast(TOAST_MESSAGE.addConnectionSuccess);
      this.router.navigateByUrl(ROUTEURL.connections);
    }).catch(() => {
      this.toastService.showSuccessToast(TOAST_MESSAGE.addConnectionFailed);
    }).finally(() => {
      this.isSubmitting = false;
    });
  }

  cancel(): void {
    this.isCancelled.emit(true);
  }
}
