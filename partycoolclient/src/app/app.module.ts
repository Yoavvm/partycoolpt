import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainRouteComponent } from './components/main-route/main-route.component';
import { BookingRouteComponent } from './components/booking-route/booking-route.component';
import { OurServicesRouteComponent } from './components/our-services-route/our-services-route.component';
import { FormsModule } from '@angular/forms';
import { BookEventFormComponent } from './components/book-event-form/book-event-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainRouteComponent,
    BookingRouteComponent,
    OurServicesRouteComponent,
    BookEventFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
