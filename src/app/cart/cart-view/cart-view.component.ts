import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css'],
})
export class CartViewComponent implements OnInit {
  cartItems: Product[] = [];
  totalPrice: number = 0;
  
  
  constructor(
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
      this.totalPrice = this.getTotalPrice();
    });
  }
  getTotalPrice() {
    let total = 0;
    for (let item of this.cartItems) {
      total += item.price;
    }

    return total;
  }
  clearCart() {
    this.cartService.clearCart().subscribe();
  }
  checkOutCart(): void {
    this.cartService.checkOutCart(this.cartItems);
  }
}
