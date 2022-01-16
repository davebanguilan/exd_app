import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private user: User;

  constructor(
    private afAuth: AngularFireAuth,
    private localStorageService: LocalStorageService
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

  async loginByEmail(email: string, password: string): Promise<any> {
    const result = await this.afAuth.signInWithEmailAndPassword(
      email,
      password
    );

    return result;
  }
}
