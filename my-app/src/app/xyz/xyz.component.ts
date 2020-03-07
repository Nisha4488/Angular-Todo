import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {
  items // initializing items

  constructor(
   private cartService: CartService // declaring the type of cartservice which is class
  ) { 
    this.cartService= cartService // declaring instance
    
  }
  
  ngOnInit(): void {
    this.items= this.cartService.getItems()
    // this.items= this.cartService.clearCart()
  }

  addToCart(product){
    this.cartService.addToCart(product)
    window.alert('Your product has been added to the cart')
  }

}
