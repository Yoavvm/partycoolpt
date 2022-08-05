import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingRouteComponent } from './components/booking-route/booking-route.component';
import { MainRouteComponent } from './components/main-route/main-route.component';
import { OurServicesRouteComponent } from './components/our-services-route/our-services-route.component';

const routes: Routes = [
  {path: '', component:MainRouteComponent},
  {path: 'book', component:BookingRouteComponent},
  {path: 'services', component:OurServicesRouteComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
