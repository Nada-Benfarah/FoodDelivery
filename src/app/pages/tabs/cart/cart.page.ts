import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: any[] = [];
  orders: any[] = [];

  constructor(private api: ApiService) {}

  removeFromCart(id: string) {
    this.cartItems = this.cartItems.filter((item: any) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  order(item: any) {
    this.orders.push(item);
    localStorage.setItem('orders', JSON.stringify(this.orders));
    this.removeFromCart(item.id);
    alert('Order placed successfully');
  }

  isOrdred(item: any) {
    return this.orders.some((order: any) => order.id === item.id);
  }

  ngOnInit() {
    let retrievedArray: any[] = JSON.parse(localStorage.getItem('cart') ?? '[]');
    this.orders = JSON.parse(localStorage.getItem('orders') ?? '[]');
    const items = this.api.allItems;

    for (let i = 0; i < retrievedArray.length; i++) {
      const foundItem = items.find((item: any) => item.id === retrievedArray[i]);

      if (foundItem) {
        this.cartItems.push(foundItem);
      }
    }
  }
}
