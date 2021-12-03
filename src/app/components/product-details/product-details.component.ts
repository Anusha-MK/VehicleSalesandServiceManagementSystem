import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';
import { VehicleService } from 'src/app/services/vehicles/vehicle.service';
import { Vehicle } from 'src/app/services/vehicles/vehicle';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id!:number;
  product!: Vehicle;
  
  constructor(
    private route: ActivatedRoute, 
    private router:Router,
    private vehicleservice: VehicleService,
    private cartService: CartService
  ) { }

  ngOnInit(){
    this.product = new Vehicle();

    this.id = this.route.snapshot.params['id'];
    
    this.vehicleservice.getVehicle(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }

  onBack() {
    this.router.navigate(['/products']);
  }

  onRatingClick(rate:string){
    console.log(rate);
  }
  
  addToCart(product: Vehicle) {
    this.cartService.addToCart(product);
    //window.alert('Your product has been added to the cart!');
  }
}

