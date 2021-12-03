

import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/services/customer/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: number
  customer: Customer
  constructor(
    private router:Router,
    private route: ActivatedRoute, 
    private customerservice: CustomerService
  ) { }

  ngOnInit(): void {
    //this.id = this.route.snapshot.params['id'];
    
    this.id = Number(sessionStorage.getItem('cid'));
    console.log(this.id);
   
    this.customer = new Customer();
    
    this.customerservice.getCustomer(this.id).subscribe( data => {
      this.customer = data;
    });
  }


  onSubmit(cid:number){
    this.router.navigate(['profile', this.id]);
  }

}
 