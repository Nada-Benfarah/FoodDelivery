import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  constructor() {}

  orders: any[] = [];
  ngOnInit() {
    this.orders= JSON.parse(localStorage.getItem('orders') || '[]') ;
  }
}
