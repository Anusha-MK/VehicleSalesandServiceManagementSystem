import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/services/order/order';
import { OrderService } from 'src/app/services/order/order.service';
import { Vehicle } from 'src/app/services/vehicles/vehicle';
import { VehicleService } from 'src/app/services/vehicles/vehicle.service';
import { CartService } from '../../services/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  order: Order = new Order();
  product: Vehicle = new Vehicle();
  Obj:any;
  oid:0;

  cart = this.cartService.getItems();
  public grandTotal !: number;
  public itemsTotal !: number;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private vehicleService: VehicleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.grandTotal = this.cartService.getTotalPrice();
    this.itemsTotal = this.cartService.getTotalItems();
  }

  removeItem = (item: any) => {
    this.cartService.removeItem(item);
  };

  saveOrder() {
    this.orderService
      .createOrder(this.order).subscribe(data => {
        console.log(data);
        this.Obj = data;
        sessionStorage.setItem('oid',this.Obj.oid.toString());
        console.log(this.Obj.oid);
      },
        error => console.log(error));
  }

  onSubmit() {
    console.log(this.order);
   
    this.order.total = this.grandTotal;

    let cid = Number(sessionStorage.getItem('cid'));
    console.log(cid);
    
    this.cart.forEach(product => {
      if(product.vehid){
        this.order.cid = cid;
        this.order.vehid = product.vehid;
        //this.order.sid = 0;
        this.saveOrder();
      }
      else{
        this.order.cid = cid;
        this.order.sid = product.sid;
        //this.order.vehid = 0;
        this.saveOrder();
      }
    });
    this.delete();
  }

  delete(){
    this.cart.forEach(product => {
      if(product.vehid){
        this.deleteVehicle(product.vehid);
        console.log(product.vehid);
      }
    });
  
    this.cartService.clearCart();
    this.gotoHome();
  }

  deleteVehicle(id: number) {
    this.vehicleService.deleteVehicle(id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
  }

  gotoHome() {
    this.router.navigate(['/checkout']);
    //window.alert("Purchase Sucessfull!!");
  }

}
