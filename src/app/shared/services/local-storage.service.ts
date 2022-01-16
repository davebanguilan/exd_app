import { Injectable } from '@angular/core';
import { LOCALSTORAGE } from '../constants';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  getCurrentUser(): User {
    const currentUser = localStorage.getItem(LOCALSTORAGE.currentUser);
    return JSON.parse(currentUser);
  }

  setCurrentUser(user: User): void {
    const currentUser = JSON.stringify(user);
    localStorage.setItem(LOCALSTORAGE.currentUser, currentUser);
  }

  removeCurrentUser(): void {
    localStorage.removeItem(LOCALSTORAGE.currentUser);
  }

  get(key: string): any {
    const currentUser = this.getCurrentUser();
    const stateString = localStorage.getItem(currentUser.id);
    let result = null;

    if (stateString && stateString.length) {
      const stateModel = JSON.parse(stateString);
      result = stateModel[key];
    }

    return result;
  }

  set(key: string, value: any): void {
    const currentUser = this.getCurrentUser();
    const stateString = localStorage.getItem(currentUser.id);
    let stateModel = {};

    if (stateString && stateString.length) {
      stateModel = JSON.parse(stateString);
      stateModel[key] = value;
    } else {
      stateModel = { [key]: value };
    }

    localStorage.setItem(currentUser.id, JSON.stringify(stateModel));
  }

  remove(key: string): void {
    const currentUser = this.getCurrentUser();
    const stateString = localStorage.getItem(currentUser.id);

    if (stateString && stateString.length) {
      const stateModel = JSON.parse(stateString);
      delete stateModel[key];
      localStorage.setItem(currentUser.id, JSON.stringify(stateModel));
    }
  }
}
