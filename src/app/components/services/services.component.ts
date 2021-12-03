import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Router } from '@angular/router';
import { Vservice } from 'src/app/services/vservices/vservice';
import { VservicesService } from 'src/app/services/vservices/vservices.service';

@Component({
  selector: 'app-vehservices',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services!: Vservice[];

  constructor(
    private vehserservice: VservicesService,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.vehserservice.getServicesList().subscribe((res)=>{
      this.services = res;
    });
   }
 
   addToCart(service: Vservice) {
     this.cartService.addToCart(service);
     //window.alert('Your product has been added to the cart!');
   }
   
}
