import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  items: Observable<Item[]>;

  constructor(private itemService: ItemService) {
    this.items = this.itemService.getItems();
  }

  ngOnInit() { }

  addItem() {
    const item = {
      name: 'phoskitos',
      imageUrl: 'http://www.distribucionescamba.com/wp-content/uploads/fotos%20subidas/001003_1.jpg',
      quantity: 10
    }
    
    this.itemService.addItem(item);
  }
}
