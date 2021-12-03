import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component'
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SellComponent } from './components/sell/sell.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { CreateAccComponent } from './components/create-acc/create-acc.component';
import { ServicesComponent } from './components/services/services.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { UpdateprofileComponent } from './components/updateprofile/updateprofile.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'index', component:IndexComponent},
  { path: 'login',component:LoginComponent},
  { path: 'createacc',component:CreateAccComponent},
  { path: 'home', component: HomeComponent},
  { path: 'products',component:ProductsComponent},
  { path: 'products/:id',component:ProductDetailsComponent},
  { path: 'sell',component:SellComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'cart',component:CartComponent},
  { path: 'checkout',component:CheckoutComponent},
  { path: 'profile',component:ProfileComponent},
  { path:'profile/:id',component:UpdateprofileComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
