import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items = [
    {
      id: "1",
      mainImageUrl: 'shoes-1.jpg',
      title: 'Nike shoes',
      images: [
        {
          url: 'shoes-1.jpg'
        },
        {
          url: 'shoes-1.jpg'
        }
      ]
    },
    {
      id: "2",
      mainImageUrl: 'shoes-2.jpg',
      title: 'Nike shoes',
      images: [
        {
          url: 'shoes-2.jpg'
        },
        {
          url: 'shoes-2.jpg'
        }
      ]
    },
    {
      id: "3",
      mainImageUrl: 'shoes-3.jpg',
      title: 'Nike shoes',
      images: [
        {
          url: 'shoes-3.jpg'
        },
        {
          url: 'shoes-3.jpg'
        }
      ]
    },
  ];
  constructor() { }
  getItems(){
    return this.items;
  }

  getItemById(id: string): any {
    let item = this.items.filter((currentItem) => {
      return currentItem.id === id;
    });
    return item[0];
  }
}
