import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ROUTEURL } from '../constants';
import { SignInRequest, User } from '../models';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private user: User;

  constructor(
    private afAuth: AngularFireAuth,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  getUser(): User {
    if (!this.user) {
      this.user = this.localStorageService.getCurrentUser();
    }

    return this.user;
  }

  setUser(user: User): void {
    this.localStorageService.setCurrentUser(user);
    this.user = user;
  }

  async createUserByEmail(user: User): Promise<any> {
    const result = await this.afAuth.createUserWithEmailAndPassword(
      user.email,
      user.password
    );

    return result;
  }

  async logout(): Promise<void> {
    await this.afAuth.signOut();
    this.user = undefined;
    this.localStorageService.removeCurrentUser();
    setTimeout(() => this.router.navigateByUrl(ROUTEURL.login), 100);
  }

  async loginByEmail(signInRequest: SignInRequest): Promise<any> {
    const result = await this.afAuth.signInWithEmailAndPassword(
      signInRequest.email,
      signInRequest.password
    );

    return result;
  }
}
