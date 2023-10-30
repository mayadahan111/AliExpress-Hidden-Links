import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items = [
    {
      id: "1",
      mainImageUrl: 'shoes-1.jpg',
      title: 'נעלי נייק פורס',
      price: '₪201.00',
      link: '',
      images: [
        {
          url: 'shoes-1-1.jpg'
        },
        {
          url: 'shoes-1-2.jpg'
        },
        {
          url: 'shoes-1-3.jpg'
        },
        {
          url: 'shoes-1-4.jpg'
        }
      ]
    },
    {
      id: "2",
      mainImageUrl: 'shoes-2.jpg',
      title: 'Nike shoes',
      price: '₪355.00',
      link: '',
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
      price: '₪355.00',
      link: '',
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
