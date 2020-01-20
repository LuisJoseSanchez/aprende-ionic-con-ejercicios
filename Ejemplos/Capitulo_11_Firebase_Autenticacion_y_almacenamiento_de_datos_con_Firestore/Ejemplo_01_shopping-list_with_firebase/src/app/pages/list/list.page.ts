import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  items: Observable<Item[]>;

  constructor(
    private itemService: ItemService,
    private router: Router
    ) {
    this.items = this.itemService.getItems();
  }

  ngOnInit() { }

  addItem() {
    this.router.navigateByUrl('/create-item');
  }
}
