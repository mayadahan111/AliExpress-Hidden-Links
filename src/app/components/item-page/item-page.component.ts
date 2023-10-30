import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ItemsService} from "../../../services/items.service";

@Component({
  selector: 'item-page-component',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
})
export class ItemPageComponent implements OnInit {
  item: any;
  images: any;

  constructor(
    private itemsService: ItemsService,
    private _router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id: string | null = this._router.snapshot.paramMap.get('id');
    if (id) {
      let item = this.itemsService.getItemById(id);
      console.log('item:', item);
      this.images = item.images;
      this.item = item;
    }
  }
}
