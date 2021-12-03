import { Injectable } from '@angular/core';
import { Vehicle } from '../vehicles/vehicle';
import { Vservice } from '../vservices/vservice';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any[] = [];
  item: Object;

  constructor() { }

  addToCart(product: Object) {
    this.cart.push(product);
  }

  getItems() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }

  removeItem(item:Object) {
    this.cart.splice(this.cart.indexOf(item), 1);
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cart.map((a:any)=>{  
      if(a.price!=null){
        grandTotal += a.price;
        console.log(a.price);
        console.log(grandTotal);
      }
      else{
        grandTotal += a.cost;
        console.log(a.cost);
        console.log(grandTotal);
      }
    })
    return grandTotal;
  }

  getTotalItems(): number{
    let itemsTotal = 0;
    this.cart.map((a:any)=>{
       itemsTotal = itemsTotal + 1;
     })
    return itemsTotal;
  }

}

