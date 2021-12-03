import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Customer } from 'src/app/services/customer/customer';
import { Router } from '@angular/router';
import { User } from 'src/app/services/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-create-acc',
  templateUrl: './create-acc.component.html',
  styleUrls: ['./create-acc.component.css']
})
export class CreateAccComponent implements OnInit {
  
  customer: Customer = new Customer();
  user: User = new User();
 
  constructor(
    private customerService: CustomerService,
    private userService: UserService,
    private router:Router,
  ) { }

  ngOnInit(): void {}
  
  saveCustomer() {
    this.customerService
    .createCustomer(this.customer).subscribe(data => {
      console.log(data);
      this.goToIndex();
    }, 
    error => console.log(error));
  }

  saveUser() {
    this.userService
    .createUser(this.user).subscribe(data => {
      console.log(data);
    }, 
    error => console.log(error));
  }

  goToIndex(){
    this.router.navigate(['/index']);
  }
  
  onSubmit() {
    console.log(this.customer);
    this.saveCustomer();    
    console.log(this.user);
    this.saveUser();
  }


}
