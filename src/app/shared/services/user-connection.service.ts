import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, Query, QueryDocumentSnapshot, QuerySnapshot } from '@angular/fire/firestore';
import { COLLECTION } from '../constants';
import { Connection, ConnectionCollection, User } from '../models';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class UserConnectionService {

  addConnectionCollectionRef: AngularFirestoreCollection<Connection>;

  constructor(
    private firestore: AngularFirestore,
    private userService: UserService
  ) {
    this.initialize();
  }

  async addConnection(addUser: User): Promise<void> {
    await this.addConnectionCollectionRef.add(this.transformUserToConnection(addUser));
    await this.addConnectionCounterpart(addUser);
  }

  async checkIfConnectionAlreadyExists(addUser: User): Promise<boolean> {
    this.addConnectionCollectionRef =
      this.firestore.collection<Connection>(`${COLLECTION.userData}/${this.userService.user.id}/${COLLECTION.connection}`);
    const query: Query<Connection> = this.addConnectionCollectionRef.ref.where('id', '==', addUser.id);
    const collections: QuerySnapshot<Connection> = await query.get();

    return collections.empty;
  }

  async getConnections(): Promise<ConnectionCollection[]> {
    let result: ConnectionCollection[] = [];
    const collectionsCol: QuerySnapshot<Connection> = await this.addConnectionCollectionRef.ref.get();

    if (!collectionsCol.empty) {
      result = collectionsCol.docs.map((d): ConnectionCollection => ({
        id: d.id,
        connection: d.data()
      }));
    } else {
      result = [];
    }

    return result;
  }

  private initialize(): void {
    this.addConnectionCollectionRef =
      this.firestore.collection<Connection>(`${COLLECTION.userData}/${this.userService.user.id}/${COLLECTION.connection}`);
  }

  private async addConnectionCounterpart(addUser: User): Promise<void> {
    const connectionCP =
      this.firestore.collection<Connection>(`${COLLECTION.userData}/${addUser.id}/${COLLECTION.connection}`);
    await connectionCP.add(this.transfromOwnerToConnection());
  }

  private transformUserToConnection(user: User): Connection {
    return {
      id: user.id,
      name: user.name,
      dateAdded: new Date(),
    };
  }

  private transfromOwnerToConnection(): Connection {
    return {
      id: this.userService.user.id,
      name: this.userService.user.name,
      dateAdded: new Date(),
    };
  }
}
