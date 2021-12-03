import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/services/customer/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Order } from 'src/app/services/order/order';
import { OrderService } from 'src/app/services/order/order.service';
import { Vehicle } from 'src/app/services/vehicles/vehicle';
import { VehicleService } from 'src/app/services/vehicles/vehicle.service';
import { Vservice } from 'src/app/services/vservices/vservice';
import { VservicesService } from 'src/app/services/vservices/vservices.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  total:number
  cid: number
  oid: number
  customer: Customer
  order:Order
  vehicle: Vehicle
  service: Vservice

  constructor(
    private route: ActivatedRoute, 
    private customerservice: CustomerService,
    private orderservice: OrderService,
    private vehicleservice: VehicleService,
    private serviceservice: VservicesService
  ) { }

  ngOnInit(): void {
    this.oid = Number(sessionStorage.getItem('oid'));
    this.oid +=1;
    console.log(this.oid);
    //console.log(sessionStorage.getItem('oid'));
    //this.order = new Order();
    this.orderservice.getOrder(this.oid).subscribe( data => {
      this.order = data;
      this.total = this.order.total;
    });
    this.cid = Number(sessionStorage.getItem('cid'));
    console.log(this.cid);
    this.customer = new Customer();
    this.customerservice.getCustomer(this.cid).subscribe( data => {
      this.customer = data;
    });


  }
}
