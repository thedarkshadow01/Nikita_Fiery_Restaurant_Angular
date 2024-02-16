import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { LandingComponent } from './landing/landing.component';
import { PaymentComponent } from './payment/payment.component';

export const routes: Routes = [
    // {path: '/', component:HomeComponent},
    {path:'search/:searchTerm', component:HomeComponent},
    {path:'tag/:tag', component: HomeComponent},
    {path:'menu', component:HomeComponent},
    {path:'orders', component:OrdersComponent},
    {path:'',component:LandingComponent},
    {path:'payment', component:PaymentComponent},
];
 