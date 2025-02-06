import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddnoteComponent } from './addnote/addnote.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes:Routes=[
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "welcome",
    component: WelcomeComponent
  },
  {
    path: "about",
    component: AboutUsComponent
  },
  {
    path: "pricing",
    component:PricingComponent 
  },
  {
    path: "contact-us",
    component: ContactUsComponent
  },
  {
    path: "addnote",
    component: AddnoteComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
