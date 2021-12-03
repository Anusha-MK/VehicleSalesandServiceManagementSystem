import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/services/customer/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  id: number;
  customer: Customer;

  constructor(private route: ActivatedRoute,private router: Router,
    private customerService: CustomerService) { }

  ngOnInit() {
    this.customer = new Customer();

    this.id = Number(sessionStorage.getItem('cid'));
    console.log(this.id);
    
    this.customerService.getCustomer(this.id)
      .subscribe(data => {
        console.log(data)
        this.customer = data;
      }, error => console.log(error));
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.id, this.customer)
      .subscribe(data => {
        console.log(data);
        this.customer = new Customer();
        this.gotoHome();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCustomer();    
  }

  gotoHome() {
    this.router.navigate(['/home']);
  }
}
