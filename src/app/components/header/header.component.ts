import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Vehicle } from 'src/app/services/vehicles/vehicle';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public itemsTotal !: number;
  
  constructor(
    private cartService : CartService
  ) { }

  ngOnInit(): void {
    this.itemsTotal = this.cartService.getTotalItems();
    console.log(this.itemsTotal);
  }
  
}
