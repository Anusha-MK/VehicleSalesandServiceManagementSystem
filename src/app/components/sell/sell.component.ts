import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/services/vehicles/vehicle';
import { VehicleService } from 'src/app/services/vehicles/vehicle.service';
import { RegvehiclesService } from 'src/app/services/regvehicles/regvehicles.service';
import { Regvehicle } from 'src/app/services/regvehicles/regvehicle';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})

export class SellComponent implements OnInit {
  vid: 0;
  product: Vehicle = new Vehicle();
  product1: Regvehicle = new Regvehicle();
  Obj: any;

  constructor(
    private vehicleService: VehicleService,
    private regvehicleService: RegvehiclesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  registerVehicle() {
    this.regvehicleService
      .RegisterVehicle(this.product1).subscribe(data => {
        console.log(data);
        this.Obj = data;
        //console.log(this.Obj);
        //console.log(this.Obj.vehid);

        this.vid=this.Obj.vehid;
        //console.log(this.vid);
        
        this.product.vehid = this.vid;
        //console.log(this.product.vehid);
        
        this.vehicleService
          .createVehicle(this.product).subscribe(data => {
            console.log(data);
          },
          error => console.log(error));
      },
      error => console.log(error));
      this.goToHome();
  }
  
  goToHome(){
        this.router.navigate(['/home']);
      }
  
  onSubmit() {
        let id = Number(sessionStorage.getItem('cid'));
        console.log(id);
        this.product1.cid = id;

        console.log(this.product);
        console.log(this.product1);
        this.registerVehicle();
      }

}
