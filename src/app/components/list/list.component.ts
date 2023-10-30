import {Component, OnInit} from "@angular/core";
import {ItemsService} from "../../../services/items.service";
import {Router} from "@angular/router";

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  items: any;
  constructor(
    private itemsService: ItemsService,
    private _router: Router
  ) { }
  ngOnInit(): void {
    this.items = this.itemsService.getItems();
  }

  itemClicked(item: any) {
    this._router.navigate([`/${item.id}`]);
  }
}
