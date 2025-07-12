import { Component } from '@angular/core';
import { ApiService } from '../../api';

@Component({
  selector: 'app-orders',
  imports: [],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class Orders {
  orders: any[] = [];

  constructor(private apiService: ApiService)  {}

  ngOnInit(): void {
    this.apiService.getOrders().subscribe(data => {
      this.orders = data;
    })
  }
}
