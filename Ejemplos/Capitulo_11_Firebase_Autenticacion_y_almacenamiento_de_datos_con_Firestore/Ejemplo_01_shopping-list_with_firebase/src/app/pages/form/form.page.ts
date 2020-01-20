import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/model/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  item: Item = {name: '', quantity: 1, imageUrl: ''};

  constructor(
    private itemService: ItemService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addItem() {
    this.itemService.addItem(this.item);
    this.router.navigateByUrl('/list');
  }
}
