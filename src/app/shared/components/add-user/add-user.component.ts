import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  @Input() user: User;
  @Output() isCancelled = new EventEmitter<boolean>();

  constructor() {}

  addUser(): void {
  }

  cancel(): void {
    this.isCancelled.emit(true);
  }
}
