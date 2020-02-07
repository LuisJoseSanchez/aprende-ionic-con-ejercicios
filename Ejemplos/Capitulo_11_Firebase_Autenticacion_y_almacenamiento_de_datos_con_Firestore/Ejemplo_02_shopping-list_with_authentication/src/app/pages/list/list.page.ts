import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  items: Observable<Item[]>;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private authService: AuthService
    ) {
    this.items = this.itemService.getItems();
  }

  ngOnInit() {
    this.authService.getCurrentUser()
      .subscribe(
        data => console.log(data)
      );
  }

  addItem() {
    this.router.navigateByUrl('/create-item');
  }

  goEditItem(id: string) {
    this.router.navigateByUrl('edit-item/' + id);
  }
}
