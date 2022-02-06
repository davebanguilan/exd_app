import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentSnapshot } from '@angular/fire/firestore';
import { COLLECTION } from '../constants';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class ScannerService {

  constructor(
    private firestore: AngularFirestore,
  ) {}

  async getUserDetailsById(id: string): Promise<User> {
    const user = await this.firestore.doc<User>(`${COLLECTION.user}/${id}`).ref.get();
    return user.data();
  }
}
