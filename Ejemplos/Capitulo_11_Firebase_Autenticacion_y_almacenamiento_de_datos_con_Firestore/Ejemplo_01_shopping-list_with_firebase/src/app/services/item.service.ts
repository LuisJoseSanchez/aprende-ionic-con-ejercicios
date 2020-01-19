import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../model/item';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private db: AngularFirestore) { }

  public addItem(item: Item): Promise<DocumentReference> {
    return this.db.collection<Item>('items').add(item);
  }

  public getItems(): Observable<Item[]> {
    return this.db.collection('items').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const itemId = a.payload.doc.id;
        return { itemId, ...data };
      }))
    );
  }
}
