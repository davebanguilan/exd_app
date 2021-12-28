import { Injectable } from '@angular/core';
import { COLLECTION } from '../constants';
import { User } from '../models';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AuthService } from '.';

@Injectable({ providedIn: 'root' })
export class UserService {
  users: AngularFirestoreCollection<User>;

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {
    this.initializeCollections();
  }

  get user(): User {
    return this.authService.getUser();
  }

  async initializeCollections(): Promise<void> {
    this.users = this.firestore.collection<User>(COLLECTION.user);
  }

  async createUserByEmail(user: User): Promise<User> {

    return new Promise((resolve, reject) => {
      user.createdAt = new Date();
      this.authService
        .createUserByEmail(user)
        .then((response) => {
          user.id = response.user.uid;
          delete user.password;
          this.createUser(user)
            .then(() => {
              this.authService.setUser(user);
              resolve(user);
            })
            .catch(() => reject(this.users));
        })
        .catch(() => {
          reject(this.users);
        });
    });
  }

  private createUser(user: User) {
    const newUser = this.users.add(user);
    return newUser;
  }

}
