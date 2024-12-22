import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RoomsComponent } from './rooms/rooms.component';
import { CustomerServiceBookingComponent } from './Customer-Service-Booking/customer-service-booking.component';
import { flatsComponent } from './flats/flats.component';
import { LearnmoreComponent } from './learnmore/learnmore.component';
export const routes: Routes = [
  { path: "", component: HomeComponent },  // Default route, Home page
  { path: "service", component: ServiceComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "rooms", component: RoomsComponent },
  {path:"flats", component:flatsComponent},
  { path: "about-us", component: AboutUsComponent },
  { path: "contact", component: ContactComponent },
  { path: "feedback", component: FeedbackComponent },
  { path: "login", component: LoginComponent },
  { path: "registration", component: RegistrationComponent },
  {path:"Customer-Service-Booking",component:CustomerServiceBookingComponent},
  {path:"learnmore",component:LearnmoreComponent},
  // { path: "signup", component:SignupComponen},
  { path: "**", component: NotFoundComponent }
];
