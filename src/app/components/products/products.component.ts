import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleService } from 'src/app/services/vehicles/vehicle.service';
import { Vehicle } from 'src/app/services/vehicles/vehicle';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  
  products!: Vehicle[];

  constructor(
    private productservice: VehicleService,
    private router: Router,
    private cartService: CartService
  ){}

  ngOnInit():void{
    this.reloadData();
  }

  reloadData(){
   this.productservice.getVehiclesList().subscribe((res)=>{
     this.products = res;
   });
  }

  productDetails(id: number){
    this.router.navigate(['product-details', id]);
  }

  addToCart(product: Vehicle) {
    this.cartService.addToCart(product);
    //window.alert('Your product has been added to the cart!');
  }

}
