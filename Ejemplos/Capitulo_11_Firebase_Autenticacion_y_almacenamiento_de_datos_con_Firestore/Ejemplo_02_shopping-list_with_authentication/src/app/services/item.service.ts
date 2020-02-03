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
    return this.db.collection('items').snapshotChanges()
      .pipe(
        map(
          snaps => snaps.map(
            snap => <Item>{
              itemId: snap.payload.doc.id,
              ...snap.payload.doc.data() as Item
            }
          )
        )
      );
  }

  public deleteItemById(id: string): Promise<void> {
    return this.db.collection('items').doc(id).delete();
  }

  public updateItemById(id: string, item: Item): Promise<void> {
    return this.db.collection('items').doc(id).set(item);
  }

  public getItemById(id: string): Observable<Item> {
    return this.db.collection('items').doc<Item>(id).valueChanges();
  }
}
