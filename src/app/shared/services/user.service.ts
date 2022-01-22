import { Injectable } from '@angular/core';
import { COLLECTION } from '../constants';
import { SignInRequest, User } from '../models';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  QuerySnapshot,
} from '@angular/fire/firestore';
import { AuthService } from '.';
import { Observable } from 'rxjs';

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
          delete user.confirmPassword;
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

  async emailLogin(signInRequest: SignInRequest): Promise<User> {

    return new Promise((resolve, reject) => {
      this.authService.loginByEmail(signInRequest).then(
        () => {
          let user: User;
          this.getUserByEmail(signInRequest.email)
            .subscribe(
              (userResponse) => {
                if (userResponse.size > 0) {
                  user = userResponse.docs[0].data();
                  user.id = userResponse.docs[0].id;
                  this.authService.setUser(user);
                  resolve(user);
                }
              },
              (error) => {
                reject(error);
              }
            );
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  getUserByEmail(email: string): Observable<QuerySnapshot<User>> {
    const user = this.firestore
      .collection<User>(COLLECTION.user, (ref) =>
        ref.where('email', '==', email)
      )
      .get();
    return user;
  }

  private createUser(user: User) {
    const newUser = this.users.add(user);
    return newUser;
  }

}
