import { Injectable } from '@angular/core';
import { Food } from './food';
import { Tag } from './tag';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  constructor() { }

  getAllTags():Tag[]{
    return [
      {name: 'All', count:3},
      {name: 'FastFood', count: 1},
      {name: 'Healthy', count:1},
      {name: 'Breakfast', count:1},
    ];
  }

  getAllFoodsByTag(tag:string):Food[]{
    if(tag=='All')
    return this.getAll();

    else
    return this.getAll().filter(food=> food.tags?.includes(tag));
  }

  getAll():Food[]{
    return [
      {
        id:1,
        name: 'Hot-Dogs',
        cookTime: '10-20',
        price:10,
        favourite:false,
        origins: ['America'],
        imageUrl: '/assets/images/food1.png',
        tags: ['FastFood', 'Hot-Dogs', 'Lunch'],
      },

      {
        id:2,
        name: 'Salad',
        cookTime: '5-10',
        price:8,
        favourite:false,
        origins: ['America'],
        imageUrl: '/assets/images/food2.png',
        tags: ['Healthy', 'Salad', 'Greens'],
      },

      {
        id:3,
        name: 'Pancakes',
        cookTime: '10-15',
        price:9,
        favourite:false,
        origins: ['America'],
        imageUrl: '/assets/images/food3.png',
        tags: ['Breakfast', 'Pancakes', 'Maple'],
      },
    ]
  }
}
