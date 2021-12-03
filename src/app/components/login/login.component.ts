import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/user/user';
import { UserService } from 'src/app/services/user/user.service';
import { Router,ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Customer } from 'src/app/services/customer/customer';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cid = 0;
  user: User = new User();
  customer: Customer = new Customer();
 

  constructor(
    private userService: UserService,
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  

  ngOnInit(): void {
  }

  validateUser() {
    this.userService
    .checkUser(this.user).subscribe(data => {
      console.log(data);
      if (data === 1 ){
        this.customer.mailid=this.user.mailid;
        this.customerService
          .getCus(this.customer).subscribe(data => {
            console.log(data);
            this.customer.cid=data;
            this.cid = Number(data);
            console.log(this.cid);
            sessionStorage.setItem('cid',this.cid.toString());
          })
        
         
          console.log(this.customer);
          console.log(this.cid);
          
          sessionStorage.setItem('email',this.user.mailid);
          
          console.log(sessionStorage.getItem('email'));
          console.log(sessionStorage.getItem('cid'));
          
         
        this.goToHome();
      }
      else{
        this.goToIndex();
      }
    }, 
    error => console.log(error));
  }

  onSubmit(){
    console.log(this.user);
    this.validateUser();    
  }

  goToIndex(){
    this.router.navigate(['/index']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

}
