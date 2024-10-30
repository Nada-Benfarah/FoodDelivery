import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  cardItem: any[] = [];

  allRestaurants = [
    {
      id: '1',
      cover: 'assets/dishes/restaurant.jpg',
      name: 'Stayfit',
      cuisines: ['Tunisian', 'Italian', 'Mexican'],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 100,
      latitude: 0,
      longitude: 0,
    },
    {
      id: '2',
      cover: 'assets/dishes/2.jpg',
      name: 'Stayfit1',
      cuisines: ['Italian', 'Mexican', 'Chinese'],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 100,
    },
    {
      id: '3',
      cover: 'assets/dishes/3.jpg',
      name: 'Pizza',
      cuisines: ['Italian', 'Mexican'],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 100,
    },
  ];

  categories = [
    { id: 1, name: 'Tunisian', image: 'assets/dishes/pasta.jpg' },
    { id: 2, name: 'Italian', image: 'assets/dishes/pasta.jpg' },
    { id: 3, name: 'Chinese', image: 'assets/dishes/chowmein.jpg' },
    { id: 4, name: 'Mexican', image: 'assets/dishes/tacos.jpg' },
  ];

  allItems = [
    {
      category_id: '1',
      cover: 'assets/dishes/pasta.jpg',
      desc: 'Traditional Tunisian couscous with lamb, vegetables, and spices.',
      id: '1',
      name: 'Couscous',
      price: 250,
      rating: 0,
      status: true,
      uid: '1',
      variation: false,
      veg: false,
    },
    {
      category_id: '1',
      cover: 'assets/dishes/pasta.jpg',
      desc: 'Crispy fried pastry filled with egg, tuna, and parsley.',
      id: '2',
      name: 'Brik',
      price: 200,
      rating: 0,
      status: true,
      uid: '1',
      variation: false,
      veg: false,
    },
    {
      category_id: '2',
      cover: 'assets/dishes/pasta.jpg',
      desc: 'Delicious Italian pasta.',
      id: '3',
      name: 'Pasta',
      price: 250,
      rating: 0,
      status: true,
      uid: '1',
      variation: false,
      veg: false,
    },
    {
      category_id: '1',
      cover: 'assets/dishes/pasta.jpg',
      desc: 'Popular chickpea soup topped with olive oil, harissa, and bread.',
      id: '4',
      name: 'Lablabi',
      price: 100,
      rating: 0,
      status: true,
      uid: '1',
      variation: false,
      veg: true,
    },
    {
      category_id: '3',
      cover: 'assets/dishes/chowmein.jpg',
      desc: 'Tasty stir-fried noodles with vegetables.',
      id: '5',
      name: 'Chowmein',
      price: 200,
      rating: 0,
      status: true,
      uid: '1',
      variation: false,
      veg: true,
    },
    {
      category_id: '4',
      cover: 'assets/dishes/tacos.jpg',
      desc: 'Classic Mexican tacos with seasoned meat and fresh toppings.',
      id: '6',
      name: 'Tacos',
      price: 180,
      rating: 0,
      status: true,
      uid: '1',
      variation: false,
      veg: false,
    },
    {
      category_id: '5',
      cover: 'assets/dishes/10.jpeg',
      desc: 'Savory Mexican roll with vegetables and spices.',
      id: '7',
      name: 'Mexican Roll',
      price: 120,
      rating: 0,
      status: true,
      uid: '1',
      variation: false,
      veg: true,
    },
  ];

  constructor(public service: StorageService) {}
}
